const axios = require('axios');
const PhoneNumber = require('../models/phoneNumber');




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
  validatePhoneNumber, 
};