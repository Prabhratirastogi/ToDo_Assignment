# Use the official Python image as base image
FROM python:3.9.6

# Set the PYTHONPATH environment variable
ENV PYTHONPATH "${PYTHONPATH}:/app"


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
CMD ["python3", "app.py"]
