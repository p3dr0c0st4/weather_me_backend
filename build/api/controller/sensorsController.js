"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const temperatureController_1 = __importDefault(require("src/api/controller/temperatureController"));
router.use('/temperature', temperatureController_1.default);
//Temperature controlers  --> WIP (structure test)
/* router.get('temperature/:id', temperatureGet);
router.post('temperature/', temperaturePost);
router.patch('temperature/:id', temperaturePatch);
router.delete('temperature/:id', temperatureDelete); */
//Humidity controlers  --> WIP (structure test)
/* router.get('humidity/:id', humidityGet);
router.post('humidity/', humidityPost);
router.patch('humidity/:id', humidityPatch);
router.delete('humidity/:id', humidityDelete); */
//Logic moved to humiditySensors and temperatureSensors
// router.get('/temperature
//sensors
//services
//get sensor data from body
//add data from body to temperature DB
//return success
exports.default = router;
