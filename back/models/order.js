const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  customer: {
    name: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
  },
  area: { type: String },
  status: { type: String, enum: ['pending', 'assigned', 'picked', 'delivered'], default: 'pending' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
  totalAmount: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
