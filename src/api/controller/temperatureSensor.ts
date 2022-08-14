import express from 'express';
const router = express.Router();
import {TemperatureRespType} from 'src/api/types/temperatureSensor';

//TEST DATA
/* const a: TemperatureRespType = {
    id: 1,
    success: false,
    data: [],
    location: "quarto",
    temperature: 25

  }; */



router.get(
    '/:id', 
    async (req, res) =>{
        res.send(req.params.id);
        const body = req.body.json;
        
        res.send(body);

} )

router.post(
    '/',
    async (req, res): Promise<TemperatureRespType> => {
      //get sensor data from body
      //add data from body to temperature DB
      //return success
      const a: TemperatureRespType = {
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
    }
  );
  
    //---------------WIP--------- 
  router.get('/temperature/history', async (req, res) => {
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
  });

  router.get('/', async (req, res) => {
    //services
    res.send('Hbase');
  });


export default router;