"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//TEST DATA
/* const a: TemperatureRespType = {
    id: 1,
    success: false,
    data: [],
    location: "quarto",
    temperature: 25

  }; */
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(req.params.id);
    const body = req.body.json;
    res.send(body);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get sensor data from body
    //add data from body to temperature DB
    //return success
    const a = {
        id: 1,
        success: true,
        data: [Date.now],
        location: "quarto",
        temperature: 20
    };
    if (!!true) {
        console.log('go');
    }
    res.send(a);
    return a;
}));
//---------------WIP--------- 
router.get('/temperature/history', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //services
    res.send('Hello world');
    /* try {
          const temperatureHistory = await temperatureSchema.find(location)
          const humidityHistory = await humiditySchema.find()
          res.json(temperatureHistory)
          res.json(humidityHistory)
      } catch{
          res.status(500).json({message: err.message})
      } */
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //services
    res.send('Hbase');
}));
exports.default = router;
