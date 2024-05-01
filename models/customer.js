import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: "Number",
      required: true,
    },
    merchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "merchant",
      required: true,
    },
  },
  { timestamps: true }
);

const customer = mongoose.model("customer", customerSchema);

export default customer;
