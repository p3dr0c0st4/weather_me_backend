import express from 'express';
import {getTemperature,postTemperature} from '@temperature/controller/temperatureController'
/**
 * /api/v1/temperature
 */
const router = express.Router();
  
router.route('/')
  .get([],getTemperature)
  .post([],postTemperature);

export default router;