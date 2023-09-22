import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 30,
  },
});

export default mongoose.model("User", userSchema);
