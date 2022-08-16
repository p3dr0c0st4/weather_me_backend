import express from 'express';
const router = express.Router();

import sensorsRoutes from './controller/sensorsController';
import temperatureControler from 'src/api/controller/temperatureController';

router.use('/sensors/temperature', temperatureControler)
router.use('/sensors', sensorsRoutes);

export default router;
