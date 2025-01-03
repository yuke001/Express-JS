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

// 02 - jan - 2025

// to connect to database

import express from "express";
import mongoose from "mongoose";

let app = express();

// db connection

async function db() {
  try {
    let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
    console.log(`db is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
}

db();

// model

let todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

let Todo = mongoose.model("todo", todoSchema);

// middleware

// processes the incoming request json data

app.use(express.json());

// POST-method for create  todo

// endpoint - /api/v1/todo

app.post("/api/v1/todo", async (req, res) => {
  let { todoName } = req.body;

  try {
    if (!todoName) {
      return res.status(400).send("todo name can't be empty");
    }
    let newTodo = await Todo.create({
      todoName: todoName,
    });
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// GET-method for read todo

// endpoint - /api/v1/todo

app.get("/api/v1/todo", async (req, res) => {
  try {
    let todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default app;
