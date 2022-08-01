const mongoose = require('mongoose');

const humidity = mongoose.Schema({
  location: String,
  humidity: String,
  date: String,
});

module.exports = mongoose.model('humidity', humidity);
