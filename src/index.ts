require('dotenv').config();
import express from 'express';
import routesV1 from './api/v1';
const app = express();
import db from './infra/db/implementation/mongodb/mongodb';

const PORT = 3000;

const initDB = () => {
  db();
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
