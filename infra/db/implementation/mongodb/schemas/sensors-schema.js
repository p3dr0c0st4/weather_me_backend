const mongoose = require('mongoose');
const { quarto } = require('../schemas/location-schema');

const sensors = mongoose.Schema({
  guid: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

model.exports = mongoose.model('sensors', sensors);
