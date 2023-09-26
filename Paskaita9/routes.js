import express from "express";

const router = express.Router();

router.post("/group");

router.post("/person");

router.post("/person/:personId/group/:groupId");

router.get("/group/:id");

export default router;
