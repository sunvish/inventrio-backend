import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017")
  .then(
    app.listen(4000, () => {
      console.log("connected to port");
    })
  )
  .catch((error) => {
    console.log(error);
  });
