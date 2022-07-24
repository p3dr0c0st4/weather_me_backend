const mongoose = require('mongoose');
const {quarto} = require('../schemas/location-schema');

const sensors = mongoose.Schema({
    guid: {
        type: String,
        required: true
    },
    timeStamp: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

model.exports = mongoose.model('sensors', sensors);

export const sensor1 = new sensors({
    guid: "1.1",
    timeStamp: "24.07.22",
    location: quarto
});
export const sensor2 = new sensors({
    guid: "1.2",
    timeStamp: "24.07.22",
    location: quarto
})
