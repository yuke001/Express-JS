import express from "express";
import {
  postTodo,
  getTodos,
  getTodo,
  putTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

let router = express.Router();

// router.post("/", postTodo);

// router.get("/", getTodos);

// router.get("/:id", getTodo);

// router.put("/:id", putTodo);

// router.delete("/:id", deleteTodo);

router.route("/").get(getTodos).post(postTodo);
router.route("/:id").get(getTodo).put(putTodo).delete(deleteTodo);

export default router;
