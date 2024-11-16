const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Import routes and models
const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');
const PhoneNumber = require('./Backend/models/phoneNumber');

// Middlewares
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/phone', phoneNumberRoutes);

// MongoDB connection
console.log('MongoDB URI:', process.env.MONGODB_URI); // Debugging step to verify that the URI is loaded

// Correcting the mongoose connection code:
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port yaahhh! ${PORT}`);
});

