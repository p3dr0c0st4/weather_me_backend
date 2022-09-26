import express from 'express';
import temperatureRoutes from '@temperature/routes/temperatureRoutes';
import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureService from '@temperature/services/TemperatureService';

/**
 * /api/v1
 */
export default function (db: IDatabase) {
  const router = express.Router({ mergeParams: true });
  const service = new TemperatureService(db);
  router.use('/temperature', temperatureRoutes(service));
  return router;
}
