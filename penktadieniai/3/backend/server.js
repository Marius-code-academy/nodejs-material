import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
