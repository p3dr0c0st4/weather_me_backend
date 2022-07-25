const mongoose = require('mongoose');
const {quarto} = require('../schemas/location-schema');

const humidity = mongoose.Schema({
    location: String,
    humidity: String,
    date: String
});

model.exports = mongoose.model('humidity', humidity);

export const humidityJanuary = new humidity({
    location: quarto,
    humidity: "50%",
    date: "01.01.22"
});