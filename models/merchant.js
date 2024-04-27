import mongoose from "mongoose";

const merchantSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },

  shopName: {
    type: "String",
    required: true,
  },
  location: {
    type: "String",
    required: true,
  },
  username: {
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
});

const merchant = mongoose.model("merchant", merchantSchema);
export default merchant;
