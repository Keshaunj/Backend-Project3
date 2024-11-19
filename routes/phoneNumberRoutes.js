const express = require('express');
const router = express.Router();
const lookupPhoneNumberAPI = require('../Backend/controllers/lookupPhoneNumberAPI');
const { validatePhoneNumber} = require('../Backend/controllers/phoneNumberController');




router.get('/validate/:phoneNumber', validatePhoneNumber );  // extranal api, here for organization and a fail back route just in case

module.exports = router;
