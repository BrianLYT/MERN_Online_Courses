# MERN Online Courses
## Description

An Online Courses built with MERN stack, that use Node.js, Express.js, React, MongoDB Atlas and JWT Authentication with user registration, instructor can upload courses, student can search courses and Enroll courses.

* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  
## Demo


## Install
```
$ git clone https://github.com/BrianLYT/MERN_Online_Course.git
$ cd server
$ npm install
              bcrypt@5.0.1
              cors@2.8.5
              dotenv@10.0.0
              express@4.17.1
              joi@17.4.0
              jsonwebtoken@8.5.1
              mongoose@5.12.14
              nodemon@2.0.7
              passport@0.4.1
              passport-jwt@4.0.0
              passport-local@1.0.0
              eslint@8.9.0
$ nodemon index.js
$ cd client
$ npm install
              axios@0.26.0
              react-router-dom@5.2.0
$ npm start
```

## Setup
```
 Create .env file that include:

  * DB_CONNECT <Your MongoDB Atlas URL>
  * PASSPORT_SECRET <Your JWT Token Secret>

```