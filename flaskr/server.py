# 📁 server.py -----

import json
import os
from os import environ as env
from urllib.parse import quote_plus, urlencode

import werkzeug.exceptions
from authlib.integrations.flask_client import OAuth
from authlib.integrations.base_client import errors
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, render_template, session, url_for

# loads env
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

# configures flask
app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")
app.database = os.path.join(app.instance_path, 'flaskr.sqlite')

# configures auth0
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


# auth0 routes
# login
@app.route("/login")
def login():
    return oauth.auth0.authorize_redirect(redirect_uri=url_for("callback", _external=True))


# callback - returns user to application after being authenticated
@app.route("/callback", methods=["GET", "POST"])
def callback():
    try:
        token = oauth.auth0.authorize_access_token()
        session["user"] = token
        return redirect("/groupsList")
    except errors.OAuthError:
        return render_template("/login.html", error='Please verify your email before signing in.')


# logout
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


# home
@app.route("/")
def login_page():
    if session is None:
        return render_template("login.html")
    else:
        return redirect("/groupsList")


@app.route("/groupsList")
def groups_list():
    return render_template("groupsList.html",
                           session=session.get('user'),
                           pretty=json.dumps(session.get('user'), indent=4))


@app.route("/profile")
def profile():
    return render_template("profile.html",
                           session=session.get('user'),
                           pretty=json.dumps(session.get('user'), indent=4))


@app.route("/group")
def group():
    return render_template("group.html",
                           session=session.get('user'),
                           pretty=json.dumps(session.get('user'), indent=4))


# instantiates server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))
