import customer from "../models/customer.js";

export const getCustomers = async (req, res) => {
  try {
    const { merchantId } = req.params;
    const customers = await customer.find({ merchantId: merchantId });
    res.status(200).json({ customers: customers });
  } catch (error) {
    console.log(error.message);
  }
};
