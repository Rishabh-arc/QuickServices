import express from "express";
import cors from "cors";
import path from "path";

import { User } from "./models/users.models.js";
import authRoutes from "./routes/auth.routes.js";

import { fileURLToPath } from "url";
import { errorHandler } from "./middlwares/error.middleware.js";
import { asyncHandler } from "./utils/async-handler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//CORS CONFIG
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5713".split(","),
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

app.use("/", authRoutes);
app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

app.use(errorHandler);

export default app;
