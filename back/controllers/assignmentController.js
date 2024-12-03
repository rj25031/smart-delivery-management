import Assignment from '../models/assignment.js';
import AssignmentMetrics from '../models/assignmentMetrics.js';
import Order from '../models/order.js';

export const assignOrder = async (req, res) => {
  const { orderId, partnerId, status, reason } = req.body;

  try {
    const newAssignment = new Assignment({ orderId, partnerId, status, reason });
    await newAssignment.save();

    const metrics = await AssignmentMetrics.findOne();
    if (!metrics) {
      await AssignmentMetrics.create({
        totalAssigned: 1,
        successRate: status === 'success' ? 100 : 0,
        failureReasons: reason ? [{ reason, count: 1 }] : [],
      });
    } else {
      metrics.totalAssigned += 1;
      if (status === 'success') {
        metrics.successRate =
          ((metrics.successRate * (metrics.totalAssigned - 1)) + 100) /
          metrics.totalAssigned;
      } else {
        metrics.successRate =
          ((metrics.successRate * (metrics.totalAssigned - 1)) + 0) /
          metrics.totalAssigned;
        if (reason) {
          const existingReason = metrics.failureReasons.find((r) => r.reason === reason);
          if (existingReason) {
            existingReason.count += 1;
          } else {
            metrics.failureReasons.push({ reason, count: 1 });
          }
        }
      }
      await metrics.save();
    }

    await Order.findByIdAndUpdate(orderId, { status: status === 'success' ? 'delivered' : 'pending' });

    res.status(201).json({ message: 'Order assigned successfully', newAssignment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('orderId partnerId');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const { status, reason } = req.body;

  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      id,
      { status, reason },
      { new: true }
    );

    if (!updatedAssignment) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    res.status(200).json({ message: 'Assignment updated successfully', updatedAssignment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAssignment = await Assignment.findByIdAndDelete({_id:id});

    if (!deletedAssignment) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAssignmentMetrics = async (req, res) => {
  try {
    const metrics = await AssignmentMetrics.findOne();
    res.status(200).json(metrics || { message: 'No metrics found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
