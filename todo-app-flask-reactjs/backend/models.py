
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
# models.py
from .extensions import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(50), nullable=False)

    def as_dict(self):
        """Return the Todo object as a dictionary."""

        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'status': self.status
        }
