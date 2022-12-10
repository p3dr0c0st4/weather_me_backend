import HumidityController from '@humidity/controller/humidityController';
import humidityService from '@humidity/services/HumidityService';
import express from 'express';

export default function (humidityService: humidityService) {
  /**
   * /api/v1/humidity
   */
  const router = express.Router({ mergeParams: true });

  const {
    getHumidity,
    getHumidityById,
    postHumidity,
    updateHumidity,
    deleteHumidity,
  } = new HumidityController(humidityService);

  router.route('/').get(getHumidity).post(postHumidity);

  router.route('/:id').patch(updateHumidity).delete(deleteHumidity).get(getHumidityById);

  return router;
}
