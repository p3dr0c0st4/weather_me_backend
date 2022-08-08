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
/* 
router.post("/sensors/:id/history/temperature", async (req, res) =>{
    try {
        const temperatureHistory = await temperatureSchema.find()
    } catch{
        res.status(500).json({message: err.message})
    }
});

router.post("/sensors/:id/history/humidity",async (req, res) =>{
    req.send({

    });
})
 */
export default router;
