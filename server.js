const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

dotenv.config();




mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));



app.use(cors());
app.use(express.json());


const PhoneNumber = require('./Backend/models/phoneNumber');

const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');

const phoneNumberControllers = require('./Backend/controllers/phoneNumberController')
app.use('/api/phone', phoneNumberRoutes);


app.get('/', (req, res) => {
  console.log('GET /api/phone was triggered!');
  res.json({ message: 'All phone numbers' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
