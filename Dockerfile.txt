# Use an official Python runtime as the parent image
FROM python:3.8-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install xgboost==1.7.6 Flask==2.3.3 scikit-learn==1.2.2 gunicorn

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
