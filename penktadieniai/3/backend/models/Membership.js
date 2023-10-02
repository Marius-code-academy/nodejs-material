import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  users_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Membership", membershipSchema);
