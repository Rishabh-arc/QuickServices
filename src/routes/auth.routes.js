import { Router } from "express";

import {
  verifyUser,
  showJoinUsPage,
  showThankYouPage,
  submitJoinUsForm,
} from "../controllers/auth.controller.js";

import { asyncHandler } from "../utils/async-handler.js";

const router = Router();

router.get("/join-us", showJoinUsPage);
router.get("/thank-you", showThankYouPage);

router.post(
  "/join-us",
  asyncHandler(verifyUser),
  asyncHandler(submitJoinUsForm),
);

export default router;
