const express = require('express');
const app = express();

app.get("/api/v1/sensors/:id/history", (req, res) =>{
    req.get();
});

app.post("/api/v1/sensors/:id/history/temperature", (req, res) =>{
    res.send();
});

app.post("/api/v1/sensors/:id/history/humidity", (req, res) =>{
    res.send();
})