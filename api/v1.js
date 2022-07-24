const express = require('express');
const app = express();
//Schemas import
const mongodb = require('../mongodb');
const humiditySchema = require('../schemas/humidity-history-schema');
const temperatureSchema = require('../schemas/temperature-history-schema');
const sensorsSchema = require('../schemas/sensors-schema');
const locationSchema = require('../schemas/location-schema');

app.get("/api/v1/sensors/:id/history", (req, res) =>{
    req.get();
});

app.post("/api/v1/sensors/:id/history/temperature", (req, res) =>{
    res.send();
});

app.post("/api/v1/sensors/:id/history/humidity", (req, res) =>{
    res.send();
})