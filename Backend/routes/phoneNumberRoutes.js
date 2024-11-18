const express = require('express');
const router = express.Router();
const lookupPhoneNumberAPI = require('../controllers/lookupPhoneNumberAPI');
const { 
  getAllPhoneNumbers, 
  createPhoneNumber, 
  getPhoneNumberById, 
  updatePhoneNumber, 
  deletePhoneNumber, 
  lookupPhoneNumber,
  validatePhoneNumber, 
  
} = require('../controllers/phoneNumberController');


router.get('/', getAllPhoneNumbers);  
router.post('/', createPhoneNumber); 
router.get('/:id', getPhoneNumberById);  
router.put('/:id', updatePhoneNumber);  
router.delete('/:id', deletePhoneNumber);  

router.get('/lookup/:phoneNumber', lookupPhoneNumberAPI.lookupPhoneNumber);  //look up in DB
router.get('/validate/:phoneNumber', validatePhoneNumber );  // extranal api

module.exports = router;
