import product from "../models/product.js";

export const getproducts = async (req, res) => {
  try {
    const { merchantId } = req.params;
    const products = await product.find({ merchantId: merchantId });
    res.status(200).json({ products: products });
  } catch (error) {
    console.log(error.message);
  }
};
