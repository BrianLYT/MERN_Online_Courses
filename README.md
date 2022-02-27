# MERN Online Courses
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

An Online Courses built with MERN stack, that use Node.js, Express.js, React, MongoDB Atlas, Bootstrap 5 and JWT Authentication with user registration, instructor can upload courses, student can search courses and Enroll courses.

* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  
## Demo
### Home  
![Home]("./assets/Home.PNG")

### Register
![Register]("./assets/Register.PNG")

### Login
![Login]("./assets/Login.PNG")

### Profile
![Profile]("./assets/Profile.PNG")

### Instructor Post Course
![Post Course]("./assets/PostCourse.PNG")

### Instructor's Courses
![Instructor's Course]("./assets/InstructorCourse.PNG")

### Student Enroll & Search Courses
![Enroll Course]("./assets/EnrollCourse.PNG")

### Student's Courses
![Student's Courses]("./assets/StudentCourse.PNG")


## Install
```
$ git clone https://github.com/BrianLYT/MERN_Online_Course.git
```
## Setup
```
 Create .env file that include:

  * DB_CONNECT <Your MongoDB Atlas URL>
  * PASSPORT_SECRET <Your JWT Token Secret>

```
## Requirements
### server
- bcrypt@5.0.1  
- cors@2.8.5  
- dotenv@10.0.0  
- express@4.17.1  
- joi@17.4.0  
- jsonwebtoken@8.5.1  
- mongoose@5.12.14  
- nodemon@2.0.7  
- passport@0.4.1  
- passport-jwt@4.0.0  
- passport-local@1.0.0  
- eslint@8.9.0  
### client
- axios@0.26.0
- react-router-dom@5.2.0
## Run
```
$ cd server
$ nodemon index.js
$ cd client
$ npm start
```

## Technologies Used
- [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.

- [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.

- [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): It provides a free cloud service to store MongoDB collections.
  
- [Bootstrap 5](https://bootstrap5.hexschool.com/): A popular framework for building responsive, mobile-first sites.

- [Passport.js](http://www.passportjs.org/): Simple, unobtrusive authentication for Node.js

- [Joi](https://joi.dev/): The most powerful schema description language
and data validator for JavaScript

## License
MIT License  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2022 BrianLYT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
