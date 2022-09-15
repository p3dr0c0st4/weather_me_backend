import express from 'express';
const router = express.Router();
import temperatureRoutes from '@temperature/routes/temperatureRoutes';
import { IDatabase } from '@db/interfaces/IDatabase';

/**
 * /api/v1
 */
const v1Routes = (db:IDatabase)=>{

  router.use('/temperature', temperatureRoutes(db));
  return router;
  
}

export default v1Routes;
