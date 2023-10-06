import express from "express";
import { addItem, getItems, deleteItemById, deleteFallbackRoute } from "./controller.js";

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addItem);

router.delete("/items/:id", deleteItemById);

router.delete("*", deleteFallbackRoute);

export default router;
