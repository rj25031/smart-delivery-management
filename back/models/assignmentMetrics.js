import mongoose from 'mongoose';


const assignmentMetricsSchema = new mongoose.Schema({
  totalAssigned: { type: Number, default: 0 },
  successRate: { type: Number, default: 0 }, 
  averageTime: { type: Number, default: 0 }, 
  failureReasons: [
    {
      reason: { type: String },
      count: { type: Number },
    },
  ],
});

export default mongoose.model('AssignmentMetrics', assignmentMetricsSchema);
