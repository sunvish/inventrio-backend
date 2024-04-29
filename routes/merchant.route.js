import express from "express";
import {
  registerMerchant,
  signInMerchant,
} from "../controllers/merchant.controller.js";

const merchantRoute = express.Router();

merchantRoute.post("/register", registerMerchant);
merchantRoute.post("/sign-In", signInMerchant);

export default merchantRoute;
