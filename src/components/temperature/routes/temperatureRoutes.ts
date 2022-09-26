import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureController from '@temperature/controller/TemperatureController';
import TemperatureService from '../services/TemperatureService';
import express from 'express';

export default function (temperatureService: TemperatureService) {
  /**
   * /api/v1/temperature
   */
  const router = express.Router({ mergeParams: true });

  const {
    getTemperature,
    postTemperature,
    updateTemperature,
    deleteTemperature,
  } = new TemperatureController(temperatureService);

  router.route('/').get(getTemperature).post(postTemperature);

  router.route('/:id').patch(updateTemperature).delete(deleteTemperature);

  return router;
}
