import  Partner from '../models/partner.js';
import bcrypt from 'bcryptjs';

  export const registerPartner = async (req, res) => {
  const { name, email, phone, password, areas, shiftStart, shiftEnd } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPartner = new Partner({ name, email, phone, password: hashedPassword, areas, shiftStart, shiftEnd });
    await newPartner.save();
    res.status(201).json({ message: 'Partner registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
