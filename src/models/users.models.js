import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  service: String,
});

const User = mongoose.model("userData", userSchema);

export { User };
