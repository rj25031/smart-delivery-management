import Partner from '../models/partner.js';
import bcrypt from 'bcryptjs';


export const registerPartner = async (req, res) => {
  const { name, email, phone, password, areas, shiftStart, shiftEnd, status } = req.body;

  try {
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPartner = new Partner({
      name,
      email,
      phone,
      password: hashedPassword,
      areas: areas.split(',').map(area => area.trim()),
      shiftStart,
      shiftEnd,
      status: status === 'active',
    });

    await newPartner.save();
    res.status(201).json({ message: 'Partner registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: error.message });
  }
};


export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find().select('-password');
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePartner = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, areas, shiftStart, shiftEnd, status } = req.body;

  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        areas: areas.split(',').map(area => area.trim()),
        shiftStart,
        shiftEnd,
        status,
      },
      { new: true }
    );

    if (!updatedPartner) {
      return res.status(404).json({ error: "Partner not found" });
    }

    res.status(200).json({ message: 'Partner updated successfully', updatedPartner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deletePartner = async (req, res) => {
  const { id } = req.params;
  
  try {

    const deletedPartner = await Partner.findByIdAndDelete({_id:id});
    console.log(deletedPartner);
    // console.log(id);
    
    if (!deletedPartner) {
      return res.status(404).json({ error: "Partner not found" });
    }

    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: error });
  }
};
