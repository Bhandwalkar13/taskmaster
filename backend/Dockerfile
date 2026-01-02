# Use official Python image
FROM python:3.12-slim

# Prevent Python from writing pyc files
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Collect static files
#RUN python manage.py collectstatic --noinput

# Run gunicorn
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]

