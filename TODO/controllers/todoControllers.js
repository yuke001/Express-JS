import Todo from "../models/Todo.js";

const postTodo = async (req, res) => {
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
};

const getTodos = async (req, res) => {
  try {
    let todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodo = async (req, res) => {
  try {
    let todos = await Todo.findById();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const putTodo = async (req, res) => {
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
};

const deleteTodo = async (req, res) => {
  let { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).send("Todo deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { postTodo, getTodos, getTodo, putTodo, deleteTodo };
