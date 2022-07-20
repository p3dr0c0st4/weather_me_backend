const express = require('express');
const app = express();

app.post("api/v1/sensors/", (req, res) =>{
    res.send({
        guid: String,
        timestamp: String,
        location: String
    })
} );

app.post("api/v1/location/", (req, res) =>{
    res.send({
        guid: String,
        sensors: String
    })
} );

app.post("api/v1/sensors/:id/humidity", (req, res) =>{
    res.send({
        location: String,
        data: String
    })
} );

app.post("api/v1/sensors/:id/temperature", (req, res) =>{
    res.send({
        location: String,
        data: String
    })
} )