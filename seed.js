import customerModel from "./models/customer.js";
import productModel from "./models/product.js";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect("mongodb://localhost:27017/inventrio");

for (let i = 0; i < 20; i++) {
  await customerModel.create({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    phoneNumber: 9748548754,
    merchantId: "662f6fe983915adf7804e6d4",
  });
}

for (let i = 0; i < 20; i++) {
  await productModel.create({
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int(100),
    cost: faker.number.int(100),
    merchantId: "662f6fe983915adf7804e6d4",
  });
}
