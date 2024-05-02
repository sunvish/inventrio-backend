import customer from "../models/customer.js";

export const getCustomers = async (req, res) => {
  try {
    const merchantId = req.merchantId;

    const customers = await customer.find({ merchantId: merchantId });

    res.status(200).json({ customers: customers });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    if (!(name && email && phoneNumber)) {
      res.status(400).json({ message: "Bad request" });
    }
    const merchantId = req.merchantId;

    const newCustomer = await customer.create({
      name,
      email,
      phoneNumber,
      merchantId,
    });

    res.status(201).json({ customerDetails: newCustomer });
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomer = async (req, res) => {
  const {} = req.body;

  const merchantId = req.merchantId;
  await customer.findOneAndUpdate({ _id: id, merchantId });
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const merchantId = req.merchantId;

  await customer.findOneAndDelete({ _id: id, merchantId });
  res.status(200).json({ mssg: "Deleted " });
};
