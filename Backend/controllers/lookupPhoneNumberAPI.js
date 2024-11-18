const axios = require('axios');

const lookupPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.params; 

  const apiUrl = `${process.env.API_URL}${phoneNumber}?apikey=${process.env.API_KEY}`;

  try {

    const response = await axios.get(apiUrl);
    

    res.status(200).json(response.data);
  } catch (error) {
   
    console.error('Error calling API:', error);
    res.status(500).json({ message: 'Error fetching phone number data' });
  }
};

module.exports = {
  lookupPhoneNumber,
};
