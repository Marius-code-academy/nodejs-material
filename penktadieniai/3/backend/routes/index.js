import express from "express";

import membershipRouter from "./memberships.js";
import userRouter from "./users.js";

const router = express.Router();

router.use("/memberships", membershipRouter);
router.use("/users", userRouter);

export default router;
