import express from "express";
import { deleteById, deleteByName } from "./controllers.js";
import { validateId } from "./middleware/index.js";

const router = express.Router();

router.delete("/person/:id", validateId, deleteById);

router.delete("/people/:name", deleteByName);

export default router;
