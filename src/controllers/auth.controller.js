import mongoose from "mongoose";
import { User } from "../models/users.models.js";
import { ApiResponse } from "../utils/api_response.js";
import { verify } from "crypto";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
const verifyUser = async (req, res, next) => {
  const { name, email } = req.body;

  const existedUser = await User.findOne({
    $or: [{ email }, { name }],
  });

  if (existedUser) {
    throw new ApiError(404, "User already exists");
  }
  next();
};

const showJoinUsPage = (req, res) => {
  res.sendFile("joinus.html", { root: "public" });
};

const showThankYouPage = (req, res) => {
  res.send("<h1>Thanks for joining us</h1>");
};

const submitJoinUsForm = asyncHandler(async (req, res) => {
  const { name, email, service } = req.body;

  const user = new User({
    name,
    email,
    service,
  });

  await user.save();

  res.redirect("/thank-you");
});

export { verifyUser, showJoinUsPage, showThankYouPage, submitJoinUsForm };
