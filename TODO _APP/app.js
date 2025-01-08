import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import db from "./config/db.js";

let app = express();

// db connection
db;

//registering template engine
app.set("view engine", "ejs");

//processing incoming json data
app.use(express.json());
app.use("/api/v1/todo", todoRouter);

app.get("/home", (req, res, next) => {
  res.render("home", { name: "Yuke", number: 8072262283 , place:"Bangalore"});
});

export default app;

// model

// let todoSchema = new mongoose.Schema(
//   {
//     todoName: {
//       type: String,
//     },

//     isCompleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// let Todo = mongoose.model("todo", todoSchema);

// middleware

// processes the incoming request json data

// app.use(express.json());

// router instance
// app.use("/api/v1/todo", todoRouter);

// ----------------------------- POST --------------------------------------------

// POST-method for create  todo

// endpoint - /api/v1/todo

// app.post("/api/v1/todo", async (req, res) => {
//   let { todoName } = req.body;

//   try {
//     if (!todoName) {
//       return res.status(400).send("todo name can't be empty");
//     }
//     let newTodo = await Todo.create({
//       todoName: todoName,
//     });
//     res.status(201).send(newTodo);
//   } catch (error) {
//     res.status(401).send(error.message);
//   }
// });

// ----------------------------- GET --------------------------------------------

// GET-method for read todo

// endpoint - /api/v1/todo

// app.get("/api/v1/todo", async (req, res) => {
//   try {
//     let todos = await Todo.find();
//     res.status(200).send(todos);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// export default app;
