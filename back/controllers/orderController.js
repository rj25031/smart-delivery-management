import Order from '../models/order.js';

export const createOrder = async (req, res) => {
  const { orderNumber, customer, area, items } = req.body;

  try {
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'At least one item is required.' });
    }

    const newOrder = new Order({ orderNumber, customer, area, items });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { orderNumber, customer, area, items, status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderNumber, customer, area, items, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: 'Order updated successfully', updatedOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete({_id:id});

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
