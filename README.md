# NestJS Todo Application Database Design

## User Table

- The User table stores information about users in our application.
- It has two columns:
  - `id`: A unique identifier for each user.
  - `username`: The username of the user.
- Users have multiple todos, so there is a connection between the User table and the Todo table.

## Todo Table

- The Todo table represents individual tasks in our application.
- It has the following columns:
  - `id`: A unique identifier for each todo.
  - `title`: A brief description of the task.
  - `complete`: A status flag that shows whether the task is complete or not.
- Each todo is associated with the user. This relationship is established through the `user_id` field.

## Relationships

- One User have multiple Todos. This is a "one-to-many" relationship.
- Each Todo is connected to a User. This is a "many-to-one" relationship.

For more details on how this design is implemented in code, refer to the User and Todo entities in our application source code.

## Instructions to run this Project
1. Clone this repository to your local machine
   ```bash
   git clone https://github.com/saifakib/nestjs-typeorm-todo.git
   cd your-project-name
   ```
2. Build and run the Docker containers
   ```bash
   docker-compose up --build
   ```
3. Access your NestJS application swagger at http://localhost:3000/api


