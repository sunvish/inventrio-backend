import express from "express";
import mongoose from "mongoose";
import customerRoute from "./routes/customer.route.js";

const app = express();

app.use("/merchant", customerRoute);

mongoose
  .connect("mongodb://localhost:27017/inventrio")
  .then(
    app.listen(4000, () => {
      console.log("connected to port");
    })
  )
  .catch((error) => {
    console.log(error);
  });
