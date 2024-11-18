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
  const { phoneNumber } = req.params;
  
  const apiUrl = `${process.env.API_URL}${phoneNumber}?apikey=${process.env.API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);  
  } catch (error) {
    console.error('Error calling API:', error);
    res.status(500).json({ message: 'Error fetching phone number data from API' });
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

