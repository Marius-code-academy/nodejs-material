import Membership from "../models/Membership.js";
import User from "../models/User.js";

export async function createMembership(req, res) {
  const { name, price, description } = req.body;

  try {
    const membership = new Membership({
      name,
      price,
      description,
    });
    await membership.save();

    res.status(201).json(membership);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function getMemberships(req, res) {
  try {
    const memberships = await Membership.find({}, { __v: 0, users_id: 0 });

    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMembership(req, res) {
  const { id } = req.params;

  try {
    const membership = await Membership.findByIdAndDelete(id);

    const users = await User.updateMany({ service_id: id }, { $unset: { service_id: 1 } });

    res.json(membership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
