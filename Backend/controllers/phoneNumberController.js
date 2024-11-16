const express = require('express');
const router = express.Router();


const getAllNumbers = (req, res) => {
    res.send('Get all phone numbers');
  };
  
  const getNumberById = (req, res) => {
    const id = req.params.id;
    res.send(`Get phone number with ID: ${id}`);
  };
  
  const searchPhoneNumber = (req, res) => {
    res.send('Search phone number');
  };
  
  const updatePhoneNumberLabel = (req, res) => {
    const number = req.params.number;
    res.send(`Update label for phone number: ${number}`);
  };
  
  module.exports = {
    getAllNumbers,
    getNumberById,
    searchPhoneNumber,
    updatePhoneNumberLabel,
  };
  

router.get('/', getAllNumbers);
router.get('/:id', getNumberById);
router.get('/search', searchPhoneNumber);
router.put('/update/:number', updatePhoneNumberLabel);

module.exports = {
    getAllNumbers,
    getNumberById,
    searchPhoneNumber,
    updatePhoneNumberLabel,
  };
  
