import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 200,
  },
  dataOfCreation: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

export default mongoose.model("Todo", todoSchema);
