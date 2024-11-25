import express from 'express';

import { registerPartner, getPartners } from '../controllers/partnerController.js';
const router = express.Router();

router.post('/register', registerPartner);
router.get('/', getPartners);

export default router;
