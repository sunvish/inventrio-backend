import mongoose from "mongoose";

const merchantSchema = mongoose.Schema({
  shopName: {
    type: "String",
    required: true,
  },
  location: {
    type: "String",
    required: true,
  },
  userName: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
},{timestamps : true});

const merchant = mongoose.model("merchant", merchantSchema);
export default merchant;
