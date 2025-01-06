import express from "express";
import Todo from "../models/Todo.js";
import mongoose from "mongoose";

let router = express.Router();

// POST-method for create  todo
// endpoint - /api/v1/todo
router.post("/",  async (req, res) => {
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

// GET-method for get the data from  todo
// endpoint - /api/v1/todo
router.get("/", async (req, res) => {
  try {
    let todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT -method for update the data from  todo
// endpoint - /api/v1/todo:id

router.put("/:id", async (req, res) => {
  let { id } = req.params;
  let { todoName, isCompleted } = req.body;

  try {
    let updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todoName, isCompleted },
      { new: true }
    );
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE-method for delete the data from  todo
// endpoint - /api/v1/todo:id

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).send("Todo deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
