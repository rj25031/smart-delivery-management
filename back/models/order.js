import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
});

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    customer: {
      name: { type: String, required: true },
      phone: { type: String },
      address: { type: String },
    },
    items: {
      type: [itemSchema],
      required: true,
      default: [],
      validate: [arrayLimit, 'At least one item is required'],
    },
    area: { type: String },
    status: {
      type: String,
      enum: ['pending', 'assigned', 'picked', 'delivered'],
      default: 'pending',
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
    totalAmount: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length > 0;
}

orderSchema.pre('save', function (next) {
  let totalAmount = 0;
  this.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  this.totalAmount = totalAmount;
  next();
});

orderSchema.index({ orderNumber: 1 });  

export default mongoose.model('Order', orderSchema);
