import express from "express";
import { getByBrand } from "./controllers.js";

const router = express.Router();

router.get("/cars/:brand", getByBrand);

router.all("*", (req, res) => {
  res.json({ message: "Tokio route nera" });
});

export default router;
