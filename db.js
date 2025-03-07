import mongoose from "mongoose";
import "dotenv/config";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Success connection"))
  .catch((err) => {
      console.error(err);
      process.exit(1)
  });
