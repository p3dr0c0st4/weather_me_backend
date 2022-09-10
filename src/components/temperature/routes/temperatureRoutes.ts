import MongoDB from '@db/implementation/mongodb/mongodb';
import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureController from '@temperature/controller/TemperatureController';
import TemperatureService from '@temperature/services/temperatureService';
import express from 'express';

export default (db:IDatabase)=>{
  /**
   * /api/v1/temperature
   */
  const router = express.Router();
    
  const service = new TemperatureService(db);
  const {getTemperature,postTemperature} = new TemperatureController(service);

  router.route('/')
    .get([],getTemperature)
    .post([],postTemperature);

  return router;
}

