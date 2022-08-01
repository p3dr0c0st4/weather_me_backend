const mongoose = require('mongoose');

const location = mongoose.Schema({
  sensors: Array,
  guid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('location', location);
