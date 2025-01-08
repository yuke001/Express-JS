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

The application will be running on `http://localhost:3000`.

### Endpoints

- `GET /` - Returns "Hello Yuke"
- `GET /home` - Logs middleware messages and returns "Home Page"
- `GET /about` - Logs middleware messages and returns "About Page"







// 

// import express from "express";

// // app instance or object

// let app = express();

// // app.use(
// //   "/home",
// //   (req, res, next) => {
// //     console.log("This is my first middleware");
// //     next();
// //   },
// //   (req, res, next) => {
// //     console.log("This is my second middleware");
// //     next();
// //   }
// // );

// app.get("/", (req, res, next) => {
//   res.send("Hello Yuke");
// });

// app.get(
//   "/home",
//   (req, res, next) => {
//     console.log("This is my 1 middleware");
//     next();
//   },
//   (req, res, next) => {
//     console.log("This is my 2 middleware");
//     next();
//   },

//   (req, res, next) => {
//     res.send("Home Page");
//   }
// );

// app.get(
//   "/about",
//   (req, res, next) => {
//     console.log("This is my 3 middleware");
//     next();
//   },
//   (req, res, next) => {
//     console.log("This is my 4 middleware");
//     next();
//   },

//   (req, res, next) => {
//     res.send("About Page");
//   }
// );

// export default app;

// ----------------------------------------------------------------------------------------------------------------------------
