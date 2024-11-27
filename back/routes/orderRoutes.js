import express from 'express';
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/create', createOrder);

router.get('/getOrder', getOrders);

router.put('/:id/orderUpdate', updateOrder);

router.delete('/:id/orderDelete', deleteOrder);

export default router;
