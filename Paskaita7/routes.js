import express from "express";
import { createCar, getCars, getCarById, updateById, deleteById } from "./controllers.js";

const router = express.Router();

router.post("/cars", createCar);

router.get("/cars", getCars);

router.get("/cars/:id", getCarById);

router.put("/cars/:id", updateById);

router.delete("/cars/:id", deleteById);

export default router;
