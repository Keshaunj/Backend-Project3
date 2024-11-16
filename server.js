const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require("morgan");
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT ? process.env.PORT : "3000";
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
// Import routes and models
const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');
const PhoneNumber = require('./Backend/models/phoneNumber');

// Middlewares
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/phone', phoneNumberRoutes);


// Start server

app.listen(PORT, () => {
  console.log(`Server running on port yaahhh! ${PORT}`);
});

