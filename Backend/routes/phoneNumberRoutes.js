
const express = require('express');
const router = express.Router();
const phoneNumberController = require('../controllers/phoneNumberController');


router.get('/', phoneNumberController.getAllPhoneNumbers);


router.post('/', phoneNumberController.createPhoneNumber);


router.get('/:id', phoneNumberController.getPhoneNumberById);

router.patch('/:id', phoneNumberController.updatePhoneNumber);


router.delete('/:id', phoneNumberController.deletePhoneNumber);

module.exports = router;
