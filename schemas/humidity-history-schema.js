const mongoose = require('mongoose');

const humidity = mongoose.Schema({
    location: String,
    data: String
});

model.exports = mongoose.model('humidity', humidity);