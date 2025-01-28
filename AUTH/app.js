import express from 'express';
import db from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
db();

let app=express();
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//base route
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/todo",todoRoutes)

//global error handling middleware
app.use((err,req,res,next)=>{
    // console.log(err.stack);
    return res.status(400).json(err.message);
})
export default app;