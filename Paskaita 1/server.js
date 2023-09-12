// npm init -y sukuria node aplikacija
// npm run paleidzia skripta is package.json
// npm install [package pvadinimas] suinstaliuoja npm package
// npm install --save-dev [package pvadinimas] suinstaliuoja npm package kaip dev dependency
// npm install -g [package pavadinimas] suinstaliuoja npm package globaliai
// nodemon [failo pavadinimas.js] paleidzia aplikacija
// npm install atsiuncia visus package is package.json

import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
