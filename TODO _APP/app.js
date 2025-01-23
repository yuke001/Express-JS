import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";
import db from "./config/db.js";
import methodOverrride from "method-override";
import cookieParser from 'cookie-parser';


let app = express();

// db connection
db;

//registering template engine
app.set("view engine", "ejs");
app.use(cookieParser());

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

//global error handling middleware
app.use((err,req,res,next)=>{
    // console.log(err.stack);
    return res.status(400).json(err.message);
})

export default app;
