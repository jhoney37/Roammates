# 📁 server.py -----

import json
import sqlite3
from os import environ as env
from dotenv import find_dotenv, load_dotenv
from urllib.parse import quote_plus, urlencode
from authlib.integrations.base_client import errors
from authlib.integrations.flask_client import OAuth
from flask import Blueprint, redirect, render_template, session, url_for, current_app, request
from flaskr.db import get_db
from base64 import b64encode

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


@bp.route("/groups_list", methods=['GET'])
def groups_list():
    db = get_db()
    groups = db.execute(
        """
        SELECT id, title, location, description, avatar
        FROM Groups
        ORDER BY id ASC
        """
    ).fetchall()

    members = db.execute(
        """
        SELECT Groups.id, Groups.title, COUNT(GroupMembers.group_id) AS member_count
        FROM Groups
        LEFT JOIN GroupMembers ON Groups.id = GroupMembers.group_id
        GROUP BY Groups.id, Groups.title
        """
    ).fetchall()

    joined_groups = db.execute(
        """
        SELECT g.group_id
        FROM GroupMembers as g, Users as u
        WHERE g.user_id = u.id
        AND email = ?
        """, (session.get('user')['userinfo']['name'],)
    ).fetchall()
    joined_groups = [i[0] for i in joined_groups]

    avatars = []
    for i in groups:
        avatars.append(b64encode(i[4]).decode("utf-8"))

    return render_template('server/groupsList.html',
                           groups=groups, members=members, avatars=avatars, joined_groups=joined_groups)


@bp.route("/group_membership", methods=['POST'])
def group_membership():
    db = get_db()
    if request.method == 'POST':
        data = request.get_json()
        type = data['type']
        value = data['value']

        if type == 'join':
            db.execute(
                """
                INSERT INTO GroupMembers
                VALUES (NULL, ?, (SELECT id FROM Users WHERE email = ?))
                """, (value, session.get('user')['userinfo']['name'],)
            )
            db.commit()
        elif type == 'leave':
            db.execute(
                """
                DELETE FROM GroupMembers
                WHERE group_id = ?
                AND user_id = (SELECT id FROM Users WHERE email = ?)
                """, (value, session.get('user')['userinfo']['name'],)
            )
            db.commit()
        else:
            print("Incorrect button type when submitting.")

    return redirect('/server/groups_list')


@bp.route("/profile")
def profile():
    return session_check(session, "/server/profile")


@bp.route("/<int:group_id>/group", methods=['GET', 'POST'])
def group(group_id):
    db = get_db()
    db.row_factory = sqlite3.Row

    group_info = db.execute(
        """
        SELECT *
        FROM Groups
        WHERE id = ?
        """, (group_id,)
    ).fetchall()

    posts = db.execute(
        """
        SELECT
            Posts.id AS post_id,
            Posts.title,
            Posts.content,
            Posts.created_at,
            Users.name AS author_name,
            Users.color AS author_color,
            Users.pronouns AS author_pronouns
        FROM
            Posts
        JOIN Users ON Posts.author = Users.id
        WHERE
            Posts.group_id = ?
        """, (group_id,)
    ).fetchall()

    members = db.execute(
        """
        SELECT *
        FROM Users
        JOIN GroupMembers ON Users.id = GroupMembers.user_id
        WHERE GroupMembers.group_id = ?
        """, (group_id,)
    ).fetchall()

    comments = {}
    for post in posts:
        post_comments = db.execute(
            """
            SELECT
                Comments.id AS comment_id,
                Comments.content AS comment_content,
                Comments.created_at AS comment_created_at,
                Users.name AS user_name,
                Users.color AS user_color,
                Users.pronouns AS user_pronouns
            FROM
                Comments
            JOIN Users ON Comments.user_id = Users.id
            WHERE
                Comments.post_id = ?
            """, (post[0],)
        ).fetchall()

        comments[f'{post[0]}'] = post_comments

    posts_formatted = {}
    for post in posts:
        posts_formatted[f'{post[0]}'] = post

    if request.method == 'GET' and 'post_id' in request.args:
        post_id = int(request.args.get('post_id'))

        return render_template('/server/overlay_template.html',
                               post=posts_formatted[f'{post_id}'], comments=comments[f'{post_id}'])

    return render_template("/server/group.html",
                           group_id=group_id, group_info=group_info, posts=posts, members=members, comments=comments)
