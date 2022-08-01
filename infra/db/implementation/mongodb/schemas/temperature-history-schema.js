const mongoose = require('mongoose');

const temperature = mongoose.Schema({
  location: String,
  temperature: String,
  date: String,
});

module.exports = mongoose.model('temperature', temperature);
