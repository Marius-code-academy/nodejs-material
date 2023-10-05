import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import db from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);

process.on("SIGINT", () => {
  db.end(() => {
    console.log("Database pool has been closed.");
    process.exit(0);
  });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
