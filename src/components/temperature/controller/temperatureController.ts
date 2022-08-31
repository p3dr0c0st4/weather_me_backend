import {NextFunction, Response,Request} from 'express'
import {
  saveTemperature,
  readTemperature,
  saveTemperatureParams,
} from '@temperature/services/temperatureService';

export interface ITemperatureDto{
  id:string,
  temperature: number,
  location: string,
  date: number
}


  const getTemperature = async (req: Request, res: Response, next: NextFunction)=>{

    //Get all docs from DB
    const tempArr:ITemperatureDto[]  = await readTemperature();
    //check if failed and return 500
    //if success return Array of docs
    res.status(200).json(tempArr);
  }
  const postTemperature = async (req: Request, res: Response, next: NextFunction)=>{
    const temp: saveTemperatureParams = {
      date: req.body.date,
      location: req.body.location,
      temperature: req.body.temperature,
    };

    const result = await saveTemperature(temp);
    if(!result){
      return res.status(500).json({
        success:false,
        message: 'Failed to save temperature'
      })
    }
    return res.status(201).json({
        success:true,
      });
  }

  export {
    getTemperature,
    postTemperature
  }