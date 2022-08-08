import express from 'express';
const router = express.Router();

//sensors
router.get('/:id/history', async (req, res) => {
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

type TemperatureRespType = {
  success: boolean;
  data: any;
};
interface ITemperatureResp {
  success: boolean;
  data: any;
}

router.post(
  '/sensors/temperature',
  async (req, res): Promise<TemperatureRespType> => {
    //get sensor data from body
    //add data from body to temperature DB
    //return success
    const a: ITemperatureResp = {
      success: false,
      data: [],
    };
    if (!!true) {
      console.log('go');
    }
    return {
      success: true,
      data: {},
    };
  }
);
/* 
router.post("/sensors/:id/history/humidity",async (req, res) =>{
    req.send({

    });
})
 */
export default router;
