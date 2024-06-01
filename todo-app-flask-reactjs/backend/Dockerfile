# Use the official Python image as base image
FROM python:3.9.6

# Set environment variables
ENV PYTHONPATH "${PYTHONPATH}:/app"
ENV FLASK_APP "app.py"

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container at /app
COPY . /app/

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["flask", "run", "--host=0.0.0.0"]
