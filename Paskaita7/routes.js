import express from "express";
import { createCar, getCars } from "./controllers.js";

const router = express.Router();

router.post("/cars", createCar);

router.get("/cars", getCars);

router.get("/cars/:id");

router.put("/cars/:id");

router.delete("/cars/:id");

export default router;
