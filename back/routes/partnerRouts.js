import express from 'express';
import {
  registerPartner,
  getPartners,
  updatePartner,
  deletePartner,
} from '../controllers/partnerController.js';

const router = express.Router();

router.post('/register', registerPartner);

router.get('/get', getPartners);

router.put('/:id/update', updatePartner);

router.delete('/:id/delete', deletePartner);

export default router;
