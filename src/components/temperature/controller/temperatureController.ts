import {NextFunction, Response,Request} from 'express'
import TemperatureType from '@temperature/types/TemperatureType'
import { saveTemperature } from '@temperature/services/temperatureService'

  const getTemperature = (req: Request, res: Response, next: NextFunction)=>{
    const temp: TemperatureType = {
      id: '1241231-123123-12312-123',
      location:'casa',
      date: 12345,
      temperature: 3012
    }
    res.json(temp);
  }
  const postTemperature = async (req: Request, res: Response, next: NextFunction)=>{
    const temp: TemperatureType = {
      date: req.body.date,
      location: req.body.location,
      temperature:req.body.temperature
    };

    const resp = await saveTemperature(temp);
    return res.json(resp);
  }

  export {
    getTemperature,
    postTemperature
  }