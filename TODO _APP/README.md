# TODO App

## Overview
TODO App is a simple and user-friendly task management application. It allows users to register, log in, and manage their tasks efficiently. The app provides features like task creation, updating, and deletion, along with user authentication for secure access.

## Features
- User registration and login with authentication.
- Add, edit, and delete tasks.
- Secure user authentication using tokens.
- Responsive design with EJS templates.

## Project Structure
```
TODO_APP/
├── README.md
├── app.js
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
├── config/
│   └── db.js
├── controllers/
│   ├── todoControllers.js
│   └── userControllers.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── Todo.js
│   └── User.js
├── public/
│   └── css/
│       └── style.css
├── routes/
│   ├── todoRoutes.js
│   └── userRoutes.js
├── utils/
│   └── generateToken.js
└── views/
    ├── home.ejs
    ├── login.ejs
    └── register.ejs
```

