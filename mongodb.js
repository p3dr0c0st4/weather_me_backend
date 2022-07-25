require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

 

app.use(express.json());
const routes = require('./api/v1');

app.use('/api/v1', routes);
 

const PORT = 3001;
app.listen(PORT, () =>{'Listening on port 3001'});