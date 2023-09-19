import { cars } from "./db.js";

export function getByBrand(req, res) {
  const { brand } = req.params;
  const brandCars = cars[brand];
  res.json(brandCars);
}
