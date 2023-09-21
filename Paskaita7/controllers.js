import Car from "./models/Car.js";

export async function createCar(req, res) {
  const { year, make } = req.body;

  try {
    const newCar = new Car({
      year,
      make,
    });
    await newCar.save();

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCars(req, res) {
  const { make, year } = req.query;
  try {
    const query = {};
    if (make) {
      query.make = make;
    }

    if (year) {
      query.year = year;
    }

    const cars = await Car.find(query, { __v: 0 });

    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
