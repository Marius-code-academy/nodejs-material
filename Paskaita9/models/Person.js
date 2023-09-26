import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 200,
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Groups",
  },
});

export default mongoose.model("Person", PersonSchema);
