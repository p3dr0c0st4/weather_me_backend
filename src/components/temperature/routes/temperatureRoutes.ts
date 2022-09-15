import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureController from '@temperature/controller/TemperatureController';
import TemperatureService from '../services/TemperatureService';
import express from 'express';

export default (db:IDatabase)=>{
  /**
   * /api/v1/temperature
   */
  const router = express.Router();
    
  const service = new TemperatureService(db);
  const {getTemperature,postTemperature, updateTemperature, deleteTemperature} = new TemperatureController(service);

  router.route('/')
    .get([],getTemperature)
    .post([],postTemperature)
    
  router.route('/:id')
    .patch([],updateTemperature)
    .delete([],deleteTemperature)

  return router;
}

  