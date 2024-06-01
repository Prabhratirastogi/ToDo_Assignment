from flask import Flask
from flask_migrate import Migrate, init, migrate, upgrade
from extensions import db
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db.init_app(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    from flask.cli import FlaskGroup
    cli = FlaskGroup(app)
    cli()
