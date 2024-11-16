const express = require('express');
const router = express.Router();
const phoneNumberController = require('../controllers/phoneNumberController');

console.log(phoneNumberController); // Add this line for debugging

router.get('/search', phoneNumberController.searchPhoneNumber);
router.put('/update/:number', phoneNumberController.updatePhoneNumberLabel);

module.exports = router;


