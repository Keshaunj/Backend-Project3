const express = require('express');
const router = express.Router();
const { 
  getAllPhoneNumbers, 
  createPhoneNumber, 
  getPhoneNumberById, 
  updatePhoneNumber, 
  deletePhoneNumber, 
  lookupPhoneNumber, 
  numSearch 
} = require('../controllers/phoneNumberController');


router.get('/', getAllPhoneNumbers);  
router.post('/', createPhoneNumber); 
router.get('/:id', getPhoneNumberById);  
router.put('/:id', updatePhoneNumber);  
router.delete('/:id', deletePhoneNumber);  

router.get('/lookup/:phoneNumber', lookupPhoneNumber); 
router.get('/validate/:phoneNumber', numSearch);  

module.exports = router;
