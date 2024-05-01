import merchant from "../models/merchant.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

// merchant register route

export const registerMerchant = async (req, res) => {
  const { location, shopName, userName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const isExistingMerchant = await merchant.findOne({ email: email });

  if (isExistingMerchant) {
    res.json({ message: "user already registered with this email" });
  }

  const newMerchant = await merchant.create({
    location,
    shopName,
    userName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ msg: newMerchant });
};

export const signInMerchant = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExistingMerchant = await merchant.findOne({ email: email });

    if (!isExistingMerchant) {
      return res.status(400).json({ mssg: "user not found" });
    }

    const validPassword = await bcrypt.compare(
      password,
      isExistingMerchant.password
    );

    if (!validPassword) {
      return res.status(400).json({ mssg: "wrong credentials" });
    }

    console.log(secretKey);
    const token = jwt.sign({ merchantId: isExistingMerchant._id }, secretKey);

    res
      .status(200)
      .json({ token: token, isExistingMerchant: isExistingMerchant });
  } catch (error) {
    console.log(error.message);
  }
};
