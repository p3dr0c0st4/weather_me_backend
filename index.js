//TODO: localhost:3001/api/ping -> "pong"  ###DONE###
import { db } from './mongodb';
const express = require('express');
const app = express();

const PORT = 3001;


db.on('error', (error) => console.log(error));

app.use(express.json());
const routes = require('./api/v1');

app.use('/', routes);

app.listen(PORT, () =>{'Listening on port 3001'});

