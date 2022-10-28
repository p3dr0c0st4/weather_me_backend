import HumidityController from '@humidity/controller/humidityController';
import humidityService from '@humidity/services/HumidityService';
import express from 'express';

export default function (humidityService: humidityService) {
  /**
   * /api/v1/temperature
   */
  const router = express.Router({ mergeParams: true });

  const {
    getHumidity,
    postHumidity,
    updateHumidity,
    deleteHumidity,
  } = new HumidityController(humidityService);

  router.route('/').get(getHumidity).post(postHumidity);

  router.route('/:id').patch(updateHumidity).delete(deleteHumidity);

  return router;
}
