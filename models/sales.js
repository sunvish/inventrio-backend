import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
  amount: {
    type: "Number",
    required: true,
  },
  discount: {
    type: "Number",
  },
  products: [
    {
      type: {
        productId: {
          type: "mongoose.Schema.Types.ObjectID",
          ref: "product",
        },
        quantity: {
          type: "Number",
          required: true,
        },
        amount: {
          type: "Number",
          required: true,
        },
      },
    },
  ],
},{timestamps : true});

const sales = mongoose.model("sales", salesSchema);
export default sales;
