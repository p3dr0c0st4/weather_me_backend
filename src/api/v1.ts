import express from 'express';
const router = express.Router();
import temperatureRoutes from '@temperature/routes/temperatureRoutes';
import { IDatabase } from '@db/interfaces/IDatabase';

const v1Routes = (db:IDatabase)=>{
  router.use('/temperature', temperatureRoutes(db));
  return router;
}
/**
 * /api/v1
 */
export default v1Routes;
