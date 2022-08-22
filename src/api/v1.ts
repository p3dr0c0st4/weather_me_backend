import express from 'express';
const router = express.Router();

import temperatureRoutes from '@temperature/routes/temperatureRoutes';

/**
 * /api/v1
 */
router.use('/temperature', temperatureRoutes)

export default router;
