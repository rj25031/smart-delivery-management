import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'; 

const partnerSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => uuidv4() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: true },
  areas: [String],
  shiftStart: { type: String },
  shiftEnd: { type: String },
  currentLoad: { type: Number, default: 0 },
  metrics: {
    completedOrders: { type: Number, default: 0 },
    cancelledOrders: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

export default mongoose.model("Partner", partnerSchema);
