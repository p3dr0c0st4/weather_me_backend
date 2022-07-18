//TODO: localhost:3001/api/ping -> "pong"  ###DONE###

const express = require('express');
const app = express();

const PORT = 3001;

app.get('/api/ping', (req, res) =>{
    res.send('pong');
});

app.listen(PORT, () =>{'Listening on port 3001'});

