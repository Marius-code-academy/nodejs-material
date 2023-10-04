import express from "express";
import { createPhone, getPhones } from "./controllers.js";

const router = express.Router();

router.post("/phone", createPhone);

router.get("/phone", getPhones);

router.get("/phone/:id");

router.delete("/phone/:id");

router.put("/phone/:id");

export default router;
