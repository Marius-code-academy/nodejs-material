import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes.js";
import { logger } from "./middleware/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use(logger);

app.use(router);

app.listen(PORT, () => console.log(`App is running ${PORT}`));
