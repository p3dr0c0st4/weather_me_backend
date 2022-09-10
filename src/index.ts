import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' }); 
import express from 'express';
import routesV1 from './api/v1';
const app = express();
import cors from 'cors';
import MongoDB from './infra/db/implementation/mongodb/mongodb';

const PORT = 3000;

const initDB = () => {
  const db = new MongoDB();
  db.init();
  return db;
};
app.use(cors());
app.use(express.json());

const db = initDB();

app.use('/api/v1', routesV1(db));
app.get('/ping', (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
