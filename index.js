
const express = require('express');
const routesV1 = require('./api/v1');
const app = express();
// const db = require('./mongodb');

const PORT = 3000;

const initDB = () => {
  //Initialize DB
};

app.use(express.json());
app.use('/api/v1', routesV1);
app.get('/ping', (req, res) => {
  res.json({ success: true });
});

initDB();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});