import express from "express";
import {
  postTodo,
  getTodos,
  getTodo,
  putTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

import { auth } from "../middlewares/auth.js";

let router = express.Router();

router.post("/",auth, postTodo);

router.get("/", auth,getTodos);

router.get("/:id",auth, getTodo);

router.put("/:id",auth, putTodo);

router.delete("/:id", auth,deleteTodo);

// router.route("/").get(getTodos).post(postTodo);
// router.route("/:id").get(getTodo).put(putTodo).delete(deleteTodo);

export default router;
