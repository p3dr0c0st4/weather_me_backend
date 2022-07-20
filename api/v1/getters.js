const express = require('express');
const app = express();

app.get("api/v1/sensors/", (req, res) =>{
    res.get({
        guid: "",
        timestamp: "",
        location: ""
    })
} );

app.get("api/v1/location/", (req, res) =>{
    res.get({
        guid: "",
        sensors: ""
    })
} );

app.get("api/v1/sensors/:id/humidity", (req, res) =>{
    res.get({
        location: "",
        data: ""
    })
} );

app.get("api/v1/sensors/:id/temperature", (req, res) =>{
    res.get({
        location: "",
        data: ""
    })
} )