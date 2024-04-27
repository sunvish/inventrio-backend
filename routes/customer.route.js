import express from "express";
import { getCustomers } from "../controllers/customer.controller.js";

const customerRoute = express.Router();

customerRoute.get("/:merchantId/customer", getCustomers);

export default customerRoute;
