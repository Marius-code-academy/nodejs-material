import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Person from "./Person.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.get("/", async (req, res) => {
  const { page, pageSize } = req.query;

  try {
    // const people = await Person.find()
    //   .sort({ age: -1, name: 1 })
    //   .limit(pageSize)
    //   .skip((page - 1) * pageSize);

    // const people = await Person.find({
    //   $or: [{ age: 26 }, { name: "Arius" }],
    // });

    // const people = await Person.find({
    //   age: { $ne: 26 },
    // });

    const people = await Person.find(
      {
        age: { $gte: 26, $lt: 30 },
      },
      { __v: 0 }
    );
    res.json(people);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
