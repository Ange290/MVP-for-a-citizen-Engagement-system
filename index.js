import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './back-end/routes/router.js';

dotenv.config(); 


const port = process.env.PORT || 6000;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Sample route
app.get('/', (req, res) => {
  res.send('Citizen Complaints System is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
