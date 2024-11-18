const axios = require('axios');
const PhoneNumber = require('../models/phoneNumber');


const getAllPhoneNumbers = async (req, res) => {
  try {
    const phoneNumbers = await PhoneNumber.find();
    res.json(phoneNumbers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createPhoneNumber = async (req, res) => {
  const { number, type, countryCode } = req.body;

  const phoneNumber = new PhoneNumber({
    number,
    type,
    countryCode,
  });

  try {
    const newPhoneNumber = await phoneNumber.save();
    res.status(201).json(newPhoneNumber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getPhoneNumberById = async (req, res) => {
  try {
    const phoneNumber = await PhoneNumber.findById(req.params.id);
    if (!phoneNumber) {
      return res.status(404).json({ message: 'Phone number not found' });
    }
    res.json(phoneNumber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updatePhoneNumber = async (req, res) => {
  try {
    const updatedPhoneNumber = await PhoneNumber.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPhoneNumber) {
      return res.status(404).json({ message: 'Phone number not found' });
    }
    res.json(updatedPhoneNumber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deletePhoneNumber = async (req, res) => {
  try {
    const phoneNumber = await PhoneNumber.findByIdAndDelete(req.params.id);
    if (!phoneNumber) {
      return res.status(404).json({ message: 'Phone number not found' });
    }
    res.json({ message: 'Phone number deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lookupPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const phoneRecord = await PhoneNumber.findOne({ phoneNumber });
    if (!phoneRecord) {
      return res.status(404).json({ error: 'Phone number not found in the database' });
    }
    res.json(phoneRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validatePhoneNumber = async (req, res) => {
  const phoneNumber = req.params.phoneNumber; 
  try {
   
    const requestUrl = `${process.env.API_URL}${phoneNumber}`;

    console.log(`Requesting URL: ${requestUrl}`);

   
    const response = await axios.get(requestUrl, {
      params: {
        apikey: process.env.API_KEY 
      }
    });

  
    const apiPhoneNumber = response.data.number;


    if (apiPhoneNumber && apiPhoneNumber === phoneNumber) {
      res.json(response.data);
    } else {
    
      const validFormats = [response.data.international_format, response.data.local_format];
      if (validFormats.includes(phoneNumber)) {
        res.json(response.data); 
      } else {
        res.status(400).json({
          error: 'Mismatched data or unexpected response from API',
          received: response.data
        });
      }
    }
  } catch (error) {
    console.error('Error validating phone number with external API:', error);
    res.status(500).json({ error: 'Error validating phone number with external API' });
  }
};




module.exports = {
  getAllPhoneNumbers,
  createPhoneNumber,
  getPhoneNumberById,
  updatePhoneNumber,
  deletePhoneNumber,
  lookupPhoneNumber,
  validatePhoneNumber, 
};

