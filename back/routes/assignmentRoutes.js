import express from 'express';
import {
  assignOrder,
  getAssignments,
  deleteAssignment,
  getAssignmentMetrics,
} from '../controllers/assignmentController.js';

const router = express.Router();

router.post('/assign', assignOrder);

router.get('/getAssign', getAssignments);

router.delete('/:id/assignDelete', deleteAssignment);

router.get('/metrics', getAssignmentMetrics);

export default router;
