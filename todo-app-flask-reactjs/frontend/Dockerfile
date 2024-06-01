# Use the official Node.js image with version 12.22.9 as the base image
FROM node:12.22.9-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container at /app
COPY . /app/

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
