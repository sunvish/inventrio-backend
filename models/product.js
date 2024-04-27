import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },

  price: {
    type: "Number",
    required: true,
  },

  stock: {
    type: "Number",
    required: true,
  },
  cost: {
    type: "Number",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
});

const product = mongoose.model("product", productSchema);
export default product;
