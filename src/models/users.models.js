import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
});

const User = mongoose.model("userData", userSchema);

export { User };
