import * as dotenv from "dotenv";
import express from 'express';
import routesV1 from './api/v1';
import cors from 'cors';
import { IDatabase } from '@db/interfaces/IDatabase';

const application = async (db:IDatabase) => {
  //Initialize db
  db.init();

  const app = express();
  app.use(cors());
  app.use(express.json());


  app.use('/api/v1', routesV1(db));
  app.get('/ping', (req, res) => {
    res.json({ success: true });
  });
  return app;
};
export default application;