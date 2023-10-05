import express from "express";
import { createPhone, getPhones, getPhoneById, deleteById, updateById } from "./controllers.js";

const router = express.Router();

router.post("/phone", createPhone);

router.get("/phone", getPhones);

router.get("/phone/:id", getPhoneById);

router.delete("/phone/:id", deleteById);

router.put("/phone/:id", updateById);

export default router;
