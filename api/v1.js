const router = require('express').Router();
const sensorsRoute = require('./controller/sensors.controller');

router.use('/sensors', sensorsRoute);

module.exports = router;
