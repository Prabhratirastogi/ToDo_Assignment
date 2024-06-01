# routes.py
from flask import Blueprint, request, jsonify, abort
from .models import Todo
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


db = SQLAlchemy()
migrate = Migrate()
cors = CORS()

bp = Blueprint('routes', __name__)

@bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Todo.query.all()
    return jsonify([task.as_dict() for task in tasks])

@bp.route('/task', methods=['POST'])
def add_task():
    data = request.json
    required_fields = ['title', 'description']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Required fields are missing in the request'}), 400
    new_task = Todo(
        title=data['title'],
        description=data['description'],
        status='Not Completed'
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'message': 'Task created successfully', 'task': new_task.as_dict()}), 201

@bp.route('/task/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.json
    required_fields = ['title', 'description', 'status']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Required fields are missing in the request'}), 400
    task = Todo.query.get(id)
    if task is None:
        return jsonify({'error': 'Task not found with ID: {}'.format(id)}), 404
    task.title = data['title']
    task.description = data['description']
    task.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Task updated successfully', 'task': task.as_dict()}), 200

@bp.route('/task/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Todo.query.get(id)
    if task is None:
        return jsonify({'error': 'Task not found with ID: {}'.format(id)}), 404
    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted successfully'}), 204

@bp.route('/')
def index():
    return "Welcome to the TODO App!"
