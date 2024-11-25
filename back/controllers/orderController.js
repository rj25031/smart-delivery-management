import Order from '../models/order.js';

const createOrder = async (req, res) => {
  const { orderNumber, customer, area, totalAmount } = req.body;

  try {
    const newOrder = new Order({ orderNumber, customer, area, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default createOrder;
