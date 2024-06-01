# todo-app-flask-reactjs

## Updating the repository...

This is a basic application with the objective of being able to save your notes and have them stored in a database. The user is able to perform basic actions such as create, read, update and delete this data, a basic CRUD.


## Table of contents
- [Built with](#built-with)
- [Project requirements and how to use it](#project-requirements-and-how-to-use-it)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [REST API](#rest-api)

## Built with

The project was developed from scratch with Frontend and Backend technologies, for the communication between the client and the server I implemented a REST API, which is responsible for returning the necessary data in JSON format to the client:

- Frontend:
  - ReactJS
  - SCSS
  - Styled Components

- Backend:
  - Python (Flask)
  - MySql (As database manager)
  - Flask Migrate (To perform migrations)
  - SQLAlchemy and Flask SQLAlchemy (Python SQL toolkit and ORM that gives application developers the full power and flexibility of SQL)
  - REST API (For communication between client and server)

## Project requirements and how to use it

For the project you must run both development environments at the same time, both the Frontend and the Backend. In the Frontend you will find JavaScript technologies (ReactJS) and in the Backend you will find Python technologies and tools (Flask), so you must have NodeJS and Python installed on your computer (As a reference this project was developed with version 3.9.6 of Python and 12.22.9 of NodeJS).




```shell
$ git clone https://github.com/Prabhratirastogi/ToDo_Assignment

$ cd todo-app-flask-reactjs

```
<!-- Run The Project -->

### Frontend

If you already have NodeJS installed on your computer perform the following steps to run the Frontend (Remember that the Backend must be running):

1. Move to the `/frontend` folder and run the following command to install the necessary:

```shell
# This will install what you need for the Frontend (npm comes with NodeJS after installation)
$ npm install
```

2. Then you will need to run the following command to start running the Frontend:

```shell
$ npm run dev

# You will see something like this:
> frontend@0.0.0 dev
> vite

  VITE v3.2.4  ready in 2079 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

3. Now Continue with the next section Backend

### Backend

If you already have Python installed on your computer perform the following steps to run the Backend

1. Move to the `/backend` folder and run the following command to create a virtual development environment with Python:

```shell
# If it doesn't work this way try "python3", this will depend on how you installed Python on your computer
$ python -m venv venv
```

2. Now activate the development environment and install the necessary requirements found in the `requirements.txt` file:

```shell
$ . venv/bin/activate
# Now install the necessary requirements using "pip" or "pip3",
(venv) $ pip install -r requirements.txt
```

3. Now you can start running the server:

```shell
(venv) $ flask run

# You will see something like this:
DATABASE_URI is OK!!!
 * Serving Flask app 'application.py'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

```shell
# This will create a new database with the necessary tables to store the data 
(venv) $ flask db upgrade
```

### REST API


| HTTP Method | Resource URL        | Notes                                   |
| ----------- | ------------------- | --------------------------------------- |
| `GET`       | */api/tasks*        | Return the collection of all tasks.     |
| `POST`      | */api/tasks*        | Register a new task.                    |
| `PUT`       | */api/tasks/id*     | Modify the values of a task.            |
| `DELETE`    | */api/tasks/id*     | Delete a task from the collection.      |

The API provides the responses in JSON format that the Frontend needs.

If you make a `GET` request for all tasks you will see something like this:

- `http://localhost:5000/api/tasks`

```shell
{
  "items": [
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 1,
      "title": "Test1"
    },
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 2,
      "title": "Test2"
    },
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 3,
      "title": "Test3"
    },
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 4,
      "title": "Test4"
    },
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 6,
      "title": "Test5"
    },
    {
      "description": "Just doing some test to finally complete this project! :)",
      "id_task": 7,
      "title": "Test6"
    }
  ],

```

<!-- Docker Implimentation and Application deployment -->

# Docker file creation build and start service

1. Create a docker-compose.yml file in your project's root directory.
2. Define services for your backend, frontend, and database in the docker-compose.yml file.
3. Build and start services using the docker-compose up command in the same directory as docker-compose.yml.
4. Access your application at http://localhost:3000 (frontend) and http://localhost:5000 (backend).


# Commands use for docker implementation 

1. Clone the Project Respository

```shell
$. git clone https://github.com/Prabhratirastogi/ToDo_Assignment

```

```shell
$. docker-compose build

```

2. Build Docker Images:

```shell
$. docker-compose build

```

3. Run the Application with:

```shell
$. docker-compose up

```

4. Start Containers

```shell
$. docker-compose up -d

```

5. Access Application Logs

```shell
$. docker-compose logs -f

```

# Frontend Backend Url For accessing the Application 

```shell
$. Frontend : http://localhost:3000  (Local)
            :http://172.18.0.2:3000  (YourNetwork)
            
$. Backend : http://172.18.0.4:5000

```

