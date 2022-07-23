const mongoose = require('mongoose');

const location = mongoose.Schema({
    sensors: String,
    guid: {
        type: String,
        required: true
    }
});

model.exports = mongoose.model('location', location);