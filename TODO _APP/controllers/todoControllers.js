import Todo from "../models/Todo.js";

const postTodo = async (req, res) => {

  console.log(req.userId);
  
  let { todoName } = req.body;

  try {
    if (!todoName) {
      throw new Error("todo name cant be empty")
    }
    // let newTodo = await Todo.create({
    //   todoName: todoName,
    // });

    await Todo.create({
      todoName: todoName,
      user:req?.userId
    });
    // res.status(201).send(newTodo);

    // for show the todos in the home page
    res.redirect("/api/v1/todo");
  } catch (error) {
    next(error)
  }
};

const getTodos = async (req, res) => {
  try {
    // let todos = await Todo.find();
    let todos = await Todo.find({user:req?.userId})
    // res.status(200).send(todos);

    // for show the todos in the home page
    res.render("home", { todos });

  } catch (error) {
    next(error)
  }
};

const getTodo = async (req, res) => {
  try {
    let todos = await Todo.findById();
    res.status(200).send(todos);
  } catch (error) {
    next(error)
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
    next(error)
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
    next(error)
  }
};

export { postTodo, getTodos, getTodo, putTodo, deleteTodo };
