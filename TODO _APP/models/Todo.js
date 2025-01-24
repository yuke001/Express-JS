import mongoose, { Schema } from "mongoose"

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


    user:{
      type:Schema.Types.ObjectId,
      ref:"user",
      required:true
    }
  },
  {
    timestamps: true,
  }
);

let Todo = mongoose.model("todo", todoSchema);

export default Todo;
