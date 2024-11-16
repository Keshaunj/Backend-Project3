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
  .then(() => {
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));  


const phoneNumberRoutes = require('./Backend/routes/phoneNumberRoutes');
app.use('/api/phone', phoneNumberRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
