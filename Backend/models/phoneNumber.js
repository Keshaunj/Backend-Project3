
const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  localFormat: String,
  internationalFormat: String,
  countryPrefix: String,
  countryCode: String,
  countryName: String,
  location: String,
  carrier: String,
  lineType: String,
  label: {
    type: String,
    enum: ['spam', 'valid', 'uncertain', 'robo-call', 'unknown'],
    default: 'unknown',
  },
  userReports: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PhoneNumber', phoneNumberSchema);
