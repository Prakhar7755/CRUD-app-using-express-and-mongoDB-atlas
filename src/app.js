import express from 'express';
import userRouter from './routes/user.route.js';
import { connectDB } from '../src/utils/connectDB.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Connect to database
connectDB(process.env.DB_URI);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Routes
app.use('/api', userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
