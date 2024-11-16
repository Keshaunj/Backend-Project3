const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const phoneNumberRoutes = require('./routes/phoneNumberRoutes'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/phone', phoneNumberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
