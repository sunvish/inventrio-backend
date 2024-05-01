import mongoose from "mongoose";

const purchaseOrderSchema = mongoose.Schema({
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
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

const purchaseOrder = mongoose.model("purchaseOrder", purchaseOrderSchema);

export default purchaseOrder;
