# app.py

from flask import Flask, send_from_directory
from dotenv import load_dotenv
from .extensions import db, migrate, cors  
from .config import Config 

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app.config.from_object(Config)

# Initialize SQLAlchemy, Migrate, and CORS
db.init_app(app)
migrate.init_app(app, db)
cors.init_app(app)

# Import routes and register blueprints
with app.app_context():
    from . import routes
    app.register_blueprint(routes.bp)

# Serve the index.html file
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
