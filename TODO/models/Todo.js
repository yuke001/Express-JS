import mongoose from "mongoose";

// model

let todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

let Todo = mongoose.model("todo", todoSchema);

export default Todo;
