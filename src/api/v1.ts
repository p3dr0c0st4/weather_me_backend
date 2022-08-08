import express from 'express';
import sensorsController from './controller/sensorsController';
const router = express.Router();

router.use('/sensors', sensorsController);

export default router;
