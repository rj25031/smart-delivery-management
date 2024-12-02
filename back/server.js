import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'https://sdsm-backend-7rmlz88le-rj25031s-projects.vercel.app'
}));
app.use(morgan('dev'))

//routes
import adminRoutes from './routes/loginRoutes.js';
import partnerRoutes from './routes/partnerRouts.js';
import orderRoutes from './routes/orderRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js' 

app.use('/api/admin', adminRoutes);
app.use('/api/partners',partnerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/assignments',assignmentRoutes); 


app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
