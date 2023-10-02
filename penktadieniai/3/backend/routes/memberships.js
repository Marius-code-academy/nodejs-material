import express from "express";
import { createMembership, deleteMembership, getMemberships } from "../controllers/membership.js";

const router = express.Router();

router.get("/", getMemberships);

router.post("/", createMembership);

router.delete("/:id", deleteMembership);

export default router;
