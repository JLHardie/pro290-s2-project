# Use the official Rasa image from Docker Hub
FROM rasa/rasa:latest

# Copy your Rasa project files into the container
COPY . /app

# Set the working directory
WORKDIR /app

# Run Rasa server with API enabled
CMD ["run", "--enable-api", "--cors", "*"]