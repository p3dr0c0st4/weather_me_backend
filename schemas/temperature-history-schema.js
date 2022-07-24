const mongoose = require('mongoose');
const {quarto} = require('../schemas/location-schema');

const temperature = mongoose.Schema({
    location: String,
    temperature: String,
    date: String
});

model.exports = mongoose.model('temperature', temperature);

export const temperatureJanuary = new temperature({
    location: quarto,
    temperature: "20°",
    date: "01.01.22"
})