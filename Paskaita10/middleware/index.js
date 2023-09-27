import mongoose from "mongoose";

export function validateId(req, res, next) {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    res.status(400).json({ error: "Invalid ID" });
  }
}

export async function logger(req, res, next) {
  console.log("Request received");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  next();
}
