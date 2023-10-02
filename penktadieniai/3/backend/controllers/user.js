import mongoose from "mongoose";
import User from "../models/User.js";
import Membership from "../models/Membership.js";

export async function createUser(req, res) {
  const { name, surname, email, service_id } = req.body;

  try {
    const user = new User({
      name,
      surname,
      email,
      service_id: new mongoose.Types.ObjectId(service_id),
    });

    const membership = await Membership.findById(service_id);
    membership.users_id.push(user._id);

    await user.save();
    await membership.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  const { order } = req.params;

  try {
    const orderQuery = order === "asc" ? 1 : -1;

    const users = await User.find().sort({ name: orderQuery }).populate("service_id");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
