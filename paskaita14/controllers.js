import db from "./db.js";

export async function createPhone(req, res) {
  const { price, brand } = req.body;

  try {
    const { rows } = await db.query(
      `insert into phones (price, brand) values (${price}, '${brand}') returning *`
    );

    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPhones(req, res) {
  try {
    const { rows } = await db.query("select * from phones");

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
