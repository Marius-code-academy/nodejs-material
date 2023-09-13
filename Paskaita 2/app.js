import express from "express";

const people = ["Alex", "Rose", "Megan"];

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json(people);
});

app.get("/api/users/:firstLetter", (req, res) => {
  const firstLetter = req.params.firstLetter;

  const filtered = people.filter((person) => person[0] === firstLetter);
  res.json(filtered);
});

app.post("/api/users", (req, res) => {
  const name = req.body.name;
  people.push(name);

  res.json(people);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
