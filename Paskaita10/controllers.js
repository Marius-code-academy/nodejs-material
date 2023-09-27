import Person from "./models/Person.js";

export async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Person.findByIdAndDelete(id);

    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteByName(req, res) {
  const { name } = req.params;

  try {
    const deleted = await Person.deleteMany({ name });

    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
