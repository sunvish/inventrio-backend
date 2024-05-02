import product from "../models/product.js";

export const getproducts = async (req, res) => {
  try {
    const merchantId = req.merchantId;
    const products = await product.find({ merchantId: merchantId });
    res.status(200).json({ products: products });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock, cost, description } = req.body;
    const merchantId = req.merchantId;

    const newProduct = await product.create({
      name,
      price,
      stock,
      cost,
      description,
      merchantId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const {} = req.body;

  const merchantId = req.merchantId;
  await customer.findOneAndUpdate({ _id: id, merchantId });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const merchantId = req.merchantId;

  await product.findOneAndDelete({ _id: id, merchantId });
  res.status(200).json({ mssg: "Deleted " });
};
