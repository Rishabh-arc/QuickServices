import dotenv from "dotenv";
import express from "express";
import app from "./app.js";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Quick services is listening to port http:/localhost:${port}`,
      );
    });
  })
  .catch((err) => {
    console.error("'MongoDB connection error", err);
    process.exit(1);
  });
