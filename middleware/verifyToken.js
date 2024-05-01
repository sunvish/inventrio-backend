import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({ mssg: "unauthorized" });
  }

  const decoded = jwt.verify(token, secretKey);

  req.merchantId = decoded.merchantId;
  next();
};
