# Express JS TODO Application

This is a simple TODO application built with Express.js.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Running the Application

To start the application, run the following command:

```bash
npm start
```
 running on `http://localhost:3000`.

### Endpoints

- `GET /` - Returns "Hello Yuke"
- `GET /home` - Logs middleware messages and returns "Home Page"
- `GET /about` - Logs middleware messages and returns "About Page"







Directory structure:
└── TODO _APP/
    ├── README.md
    ├── app.js
    ├── gitignore
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── .gitignore
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

// );

// export default app;

// ----------------------------------------------------------------------------------------------------------------------------
