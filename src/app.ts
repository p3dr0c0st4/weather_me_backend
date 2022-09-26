import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' }); 
import express from 'express';
import routesV1 from './api/v1';
import cors from 'cors';
import MongoDB from './infra/db/implementation/mongodb/mongodb';
import mockDb from '@db/implementation/mockDb/mockDb';
import { IDatabase } from '@db/interfaces/IDatabase';

const initDB = () => {
  const db: IDatabase = new mockDb();
  db.init();
  //TODO: validate if DB is ready
  //process.exit(0)
  return db;
};;

const application = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const db = initDB();

  app.use('/api/v1', await routesV1(db));
  app.get('/ping', (req, res) => {
    res.json({ success: true });
  });
  return app;
};
export default application;