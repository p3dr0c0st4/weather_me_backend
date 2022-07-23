const mongoose = require('mongoose');

const temperature = mongoose.Schema({
    location: String,
    data: String
});

model.exports = mongoose.model('temperature', temperature);