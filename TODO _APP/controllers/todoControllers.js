import Todo from "../models/Todo.js";

const postTodo = async (req, res) => {
  let { todoName } = req.body;

  try {
    if (!todoName) {
      return res.status(400).send("todo name can't be empty");
    }
    // let newTodo = await Todo.create({
    //   todoName: todoName,
    // });

    await Todo.create({
      todoName: todoName,
    });
    // res.status(201).send(newTodo);

    // for show the todos in the home page
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const getTodos = async (req, res) => {
  try {
    let todos = await Todo.find();
    // res.status(200).send(todos);

    // for show the todos in the home page
    res.render("home", { todos });

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


// update 

const putTodo = async (req, res) => {
  let { id } = req.params;

  try {
    
     await Todo.findByIdAndUpdate(
      id,
      {isCompleted: req.body.isCompleted}
      // { new: true }
    );
    res.redirect("/api/v1/todo");
    // res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// -----------------------

const deleteTodo = async (req, res) => {
  let { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    // res.status(200).send("Todo deleted successfully");
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { postTodo, getTodos, getTodo, putTodo, deleteTodo };
