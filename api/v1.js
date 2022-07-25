const express = require('express');
const router = express.Router();

//Schemas import
const mongodb = require('../mongodb');
const humiditySchema = require('../schemas/humidity-history-schema');
const temperatureSchema = require('../schemas/temperature-history-schema');
const sensorsSchema = require('../schemas/sensors-schema');
const locationSchema = require('../schemas/location-schema');


router.get("/sensors/:id/history", async (req, res) =>{
    res.send('Hello world');
    /* try {
        const temperatureHistory = await temperatureSchema.find(location)
        const humidityHistory = await humiditySchema.find()
        res.json(temperatureHistory)
        res.json(humidityHistory)
    } catch{
        res.status(500).json({message: err.message})
    } */
});
/* 
router.post("/sensors/:id/history/temperature", async (req, res) =>{
    try {
        const temperatureHistory = await temperatureSchema.find()
    } catch{
        res.status(500).json({message: err.message})
    }
});

router.post("/sensors/:id/history/humidity",async (req, res) =>{
    req.send({

    });
})
 */
module.exports = router;