import mongoose from "mongoose";

const vendorSchema = mongoose.Schema(
  {
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
    merchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "merchant",
    },
  },
  { timestamps: true }
);

const vendor = mongoose.model("vendor", vendorSchema);

export default vendor;
