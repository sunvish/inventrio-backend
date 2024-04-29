import express from "express";
import mongoose from "mongoose";
import customerRoute from "./routes/customer.route.js";
import productRoute from "./routes/product.route.js";
import merchantRoute from "./routes/merchant.route.js";

const app = express();

app.use(express.json());
app.use("/merchant", customerRoute);
app.use("/merchant", productRoute);

app.use("/merchant", merchantRoute);

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
