const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Import routes and models from backend folder
const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');
const PhoneNumber = require('./Backend/models/phoneNumber');  // Correct path to the backend/models

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/phone', phoneNumberRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI,)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port yaahhh! ${PORT}`);
});
