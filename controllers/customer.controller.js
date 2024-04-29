import customer from "../models/customer.js";

export const getCustomers = async (req, res) => {
  try {
    const { merchantId } = req.params;
    const { page, size } = req.query;
    const customers = await customer
      .find({ merchantId: merchantId })
      .limit(size)
      .skip((page - 1) * size);
    res.status(200).json({ customers: customers });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = async (req, res) => {};
