import LoginSch  from '../models/login.js';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await LoginSch.findOne({ email });    
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    const isPasswordValid = password == user.password;
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '10s' }
    );
    console.log(token);
    
    res.status(200).json({
      message: 'Login successful',
      success:true,
      token: token,
      user: { id: user._id, name: user.name, email: user.email , role:user.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

