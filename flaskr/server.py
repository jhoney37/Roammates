# 📁 server.py -----

import json
from os import environ as env
from dotenv import find_dotenv, load_dotenv
from urllib.parse import quote_plus, urlencode
from authlib.integrations.base_client import errors
from authlib.integrations.flask_client import OAuth
from flask import Blueprint, redirect, render_template, session, url_for, current_app, g
from flask.cli import with_appcontext
from flaskr.db import get_db

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

oauth = OAuth(current_app)

oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)

bp = Blueprint('server', __name__, url_prefix='/server')


def add_user_to_db(email):
    db = get_db()
    c = db.cursor()

    c.execute(
        """
        INSERT INTO Users
        VALUES(NULL, datetime('now'), ?, NULL, NULL, NULL, NULL);
        """, (email,)
    )

    db.commit()


def get_user(email):
    db = get_db()
    c = db.cursor()

    c.execute("SELECT email FROM Users WHERE email=?", (email,))
    return c.fetchone()


def session_check(_session, page):
    if _session.get('user'):
        return render_template(f"{page}.html",
                               session=session.get('user'),
                               pretty=json.dumps(session.get('user'), indent=4))
    else:
        return redirect("/")


@bp.route("/login")
def login():
    return oauth.auth0.authorize_redirect(redirect_uri=url_for("server.callback", _external=True))


@bp.route("/callback", methods=["GET", "POST"])
def callback():
    try:
        token = oauth.auth0.authorize_access_token()
        session["user"] = token
        # db.add_user(token['userinfo']['name'])
        return redirect("/")
    except errors.OAuthError:
        return render_template("server/login.html", error='Please verify your email before signing in.')


@bp.route("/logout")
def logout():
    session.clear()
    print(url_for("server.login_page"))
    return redirect(
        "https://" + env.get("AUTH0_DOMAIN")
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("server.login_page", _external=True),
                "client_id": env.get("AUTH0_CLIENT_ID"),
            },
            quote_via=quote_plus,
        )
    )


@bp.route("/")
def login_page():
    if session.get('user') is not None and get_user(session.get('user')['userinfo']['name']) is None:
        return render_template("server/login.html", terms=True, complete=redirect("/add_user"))
    elif session.get('user') is not None and get_user(session.get('user')['userinfo']['name']) is not None:
        return redirect("server/groups_list")
    else:
        return render_template("server/login.html")


@bp.route("/add_user")
def add_user():
    add_user_to_db(session.get('user')['userinfo']['name'])
    return redirect("/")


@bp.route("/groups_list")
def groups_list():
    return session_check(session, "server/groupsList")


@bp.route("/profile")
def profile():
    return session_check(session, "server/profile")


@bp.route("/group")
def group():
    return session_check(session, "server/group")

