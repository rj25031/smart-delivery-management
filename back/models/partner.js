import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  areas: [String],
  shiftStart: { type: String },
  shiftEnd: { type: String },
  metrics: {
    completedOrders: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

export default mongoose.model('Partner', partnerSchema);
