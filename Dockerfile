# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

COPY package*.json ./
COPY src/ ./src/
COPY tsconfig.json ./

# Install application dependencies
RUN npm install

COPY . .

RUN npm run build
 
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "run", "start:dev"]