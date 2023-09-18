import express from "express";
import { test, getPerson, getPersonFromGroup } from "./controllers.js";

const router = express.Router();

router.get("/", test);

router.get("/people", test);

router.get("/people/:id", getPerson);

router.get("/groups/:groupId/people/:personId", getPersonFromGroup);

export default router;
