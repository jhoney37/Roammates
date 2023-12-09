# 📁 server.py -----

import json
import os
import db
from os import environ as env
from urllib.parse import quote_plus, urlencode
from authlib.integrations.flask_client import OAuth
from authlib.integrations.base_client import errors
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for, g

# loads env
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)


app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")
app.database = os.path.join(app.instance_path, 'flaskr.sqlite')

oauth = OAuth(app)

oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)


def add_user(email):
    db.c.execute(
        """
        INSERT INTO Users
        VALUES(datetime(now), ?, NULL, NULL, NULL, NULL);
        """, email
    )


def get_user(email):
    db.c.execute("SELECT email FROM Users WHERE email='?'", email)
    return db.c.fetchone()


def session_check(_session, page):
    if _session.get('user'):
        return render_template(f"{page}.html",
                               session=session.get('user'),
                               pretty=json.dumps(session.get('user'), indent=4))
    else:
        return redirect("/")


@app.route("/login")
def login():
    return oauth.auth0.authorize_redirect(redirect_uri=url_for("callback", _external=True))


@app.route("/callback", methods=["GET", "POST"])
def callback():
    try:
        token = oauth.auth0.authorize_access_token()
        session["user"] = token
        # db.add_user(token['userinfo']['name'])
        return render_template("/login.html")
    except errors.OAuthError:
        return render_template("/login.html", error='Please verify your email before signing in.')


@app.route("/logout")
def logout():
    session.clear()
    return redirect(
        "https://" + env.get("AUTH0_DOMAIN")
        + "/v2/logout?"
        + urlencode(
            {
                "returnTo": url_for("/", _external=True),
                "client_id": env.get("AUTH0_CLIENT_ID"),
            },
            quote_via=quote_plus,
        )
    )


@app.route("/")
def login_page():
    if session.get('user') and get_user(session.get('user')['userinfo']['name']) is None:
        return render_template("login.html", terms=True, complete=redirect("/add_user"))
    elif session.get('user') and get_user(session.get('user')['userinfo']['name']) is not None:
        return redirect("/groupsList")
    else:
        return render_template("login.html")


@app.route("/add_user")
def add_user():
    pass


@app.route("/groups_list")
def groups_list():
    return session_check(session, "groupsList")


@app.route("/profile")
def profile():
    return session_check(session, "profile")


@app.route("/group")
def group():
    return session_check(session, "group")


# instantiates server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))
