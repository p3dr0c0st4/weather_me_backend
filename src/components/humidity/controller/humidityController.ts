import { HumidityDto } from '@humidity/dtos/humidityDto';
import HumidityService from '@humidity/services/HumidityService';

import { NextFunction, Response, Request } from 'express';

export default class HumidityController {
  constructor(private humidityService: HumidityService) {}

  getHumidity = async (req: Request, res: Response, next: NextFunction) => {
    //Get all docs from DB
    const tempArr: HumidityDto[] =
      await this.humidityService.readHumidity();
    
    // //if success return Array of docs
    return res.status(200).json({data:tempArr});
  };

  postHumidity = async (req: Request, res: Response, next: NextFunction) => {
    const temp: HumidityDto = {
      date: req.body.date,
      location: req.body.location,
      humidity: req.body.humidity,
    };
    const result = await this.humidityService.saveHumidity(temp);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: 'Failed to save humidity',
      });
    }
    return res.status(201).json({
      success: true,
    });
  };

  updateHumidity = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    // Get docs from db
    try {
      const temp: HumidityDto = {
        date: req.body.date,
        location: req.body.location,
        humidity: req.body.humidity,
      };
      const id = req.params.id;


      let result: HumidityDto =
        await this.humidityService.updateHumidity(id, temp);
      //check if failed and return 500
      if (!result) {
        return res.status(500).json({
          sucess: false,
          message: 'Failed to update Humidity Sensor',
        });
      }
      //Send response
      return res.status(200).json({
        success: true,
        message: 'Successfully updated on Database',
        data: result,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        sucess: false,
        message: error,
      });
    }
  };
  deleteHumidity = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const result = await this.humidityService.deleteHumidity(id);

    if (!result) {
      return res.status(500).json({
        success: false,
        message: 'Failed to delete object',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Successfully deleted on Database',
    });
  };
}
