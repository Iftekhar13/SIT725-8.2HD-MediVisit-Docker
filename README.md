# MediVisit Prototype - Dockerised Deployment

This repository contains the Dockerised version of the MediVisit application for SIT725 Task 8.2HD: Docker End-to-End Application Deployment.

The application is a Node.js and Express web application with MongoDB database integration. Docker Compose is used to run both the application server and MongoDB database in a containerised environment.

## Student Verification Endpoint

The application includes the required student identity API endpoint:

```text
http://localhost:3000/api/student
```

Expected response:

```json
{
  "name": "Iftekhar Al Mahmud",
  "studentId": "226048754"
}
```

## Requirements

Before running the application, make sure the following software is installed:

* Docker Desktop
* Git

Docker Desktop must be running before starting the application.

## How to Run the Application

Clone this repository:

```bash
git clone https://github.com/Iftekhar13/SIT725-8.2HD-MediVisit-Docker.git
```

Go into the project folder:

```bash
cd SIT725-8.2HD-MediVisit-Docker
```

Build and start the application using Docker Compose:

```bash
docker compose up --build
```

After the containers start successfully, the terminal should show that the server is running and MongoDB is connected.

Open the application in a browser:

```text
http://localhost:3000
```

Open the student verification endpoint:

```text
http://localhost:3000/api/student
```

## Docker Services

This project uses two Docker services:

### app

This service runs the Node.js and Express application.

### mongo

This service runs the MongoDB database container.

The application connects to MongoDB using the Docker Compose service name:

```text
mongodb://mongo:27017/hospital_visitor_system
```

## Database Functionality

The application uses MongoDB for database-backed features such as user registration, login, visitor-related functions, complaints, and other stored records. These features are available when the application is started through Docker Compose.

## Configuration

Sensitive runtime values are not committed in a real `.env` file. A sample `.env.example` file is included to show the required environment variables.

Docker Compose provides the required runtime configuration for local containerised execution.

## Stop the Application

To stop the running containers, press:

```bash
CTRL + C
```

Then run:

```bash
docker compose down
```

## Rebuild After Code Changes

If any source code is changed, rebuild the containers using:

```bash
docker compose up --build
```

## Important Notes

* The application runs on port `3000`.
* The database runs through the MongoDB Docker container.
* The `/api/student` endpoint is included for SIT725 8.2HD verification.
* The repository does not include `node_modules` or a real `.env` file.
