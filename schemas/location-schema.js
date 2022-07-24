const mongoose = require('mongoose');
const { sensor1, sensor2 } = require('./sensors-schema');

const location = mongoose.Schema({
    sensors: Array,
    guid: {
        type: String,
        required: true
    }
});

model.exports = mongoose.model('location', location);

export const quarto = new location({
    sensors: [sensor1, sensor2],
    guid: "2.1"
});