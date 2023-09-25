import express from "express";
import {
  getTodos,
  deleteTodoById,
  updateTodoById,
  addTodo,
  login,
} from "./controllers.js";

const router = express.Router();

router.get("/todo", getTodos);

router.delete("/todo/:id", deleteTodoById);

router.put("/todo/:id", updateTodoById);

router.post("/todo", addTodo);

router.post("/login", login);

export default router;
