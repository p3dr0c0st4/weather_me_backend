import express from 'express';
import temperatureRoutes from '@temperature/routes/temperatureRoutes';
import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureService from '@temperature/services/TemperatureService';
import HumidityService from '@humidity/services/HumidityService';
import humidityRoutes from '@humidity/routes/humidityRoutes';

/**
 * /api/v1
 */
export default function (db: IDatabase) {
  const router = express.Router({ mergeParams: true });
  const temperatureService = new TemperatureService(db);
  const humidityService = new HumidityService(db);
  
  router.use('/temperature', temperatureRoutes(temperatureService));
  router.use('/humidity', humidityRoutes(humidityService));
  return router;
}
