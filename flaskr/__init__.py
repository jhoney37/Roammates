import os

from flask import Flask
from os import environ as env
from dotenv import find_dotenv, load_dotenv

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)


def create_app(test_config=None):
    app = Flask(__name__)
    app.secret_key = env.get("APP_SECRET_KEY")
    app.database = os.path.join(app.instance_path, 'flaskr.sqlite')
    app.config['DATABASE'] = os.path.join(app.instance_path, 'flaskr.sqlite')

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)

    from . import server
    app.register_blueprint(server.bp)
    app.add_url_rule('/', endpoint='server.login_page')

    @app.context_processor
    def utility_functions():
        def print_in_console(message):
            print(str(message))

        return dict(mdebug=print_in_console)

    return app


if __name__ == "__main__":
    create_app().run(host="0.0.0.0", port=env.get("PORT", 3000))
