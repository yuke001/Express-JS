import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";

import db from "./config/db.js";

import methodOverrride from "method-override";

let app = express();

// db connection
db;

//registering template engine
app.set("view engine", "ejs");

//processing incoming json data
// app.use(express.json());

// processing incoming form data
app.use(express.urlencoded({ extended: true }));

// method override
app.use(methodOverrride("_method"));

// serves static files such as css, images, js files
app.use(express.static("public"));

// routers
app.use("/api/v1/todo", todoRouter);
app.use("/api/v1/user", userRouter);
// app.get("/home", (req, res, next) => {
//   res.render("home", { name: "Yuke", number: 8072262283, place: "Bangalore" });
// });

export default app;
