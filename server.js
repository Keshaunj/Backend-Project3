const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');
const PhoneNumber = require('./Backend/models/phoneNumber');  


app.use(cors());
app.use(express.json());


app.use('/api/phone', phoneNumberRoutes);

mongoose.connect(process.env.MONGO_URI,)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port yaahhh! ${PORT}`);
});
