import { TemperatureDto } from '@temperature/dtos/temperatureDto';
import TemperatureService from '../services/TemperatureService';

import { NextFunction, Response, Request } from 'express';

export default class TemperatureController {
  constructor(private temperatureService: TemperatureService) {}

  getTemperature = async (req: Request, res: Response, next: NextFunction) => {
    //Get all docs from DB
    const tempArr: TemperatureDto[] =
      await this.temperatureService.readTemperature();
    
    // //if success return Array of docs
    return res.status(200).json({data:tempArr});
  };

  getTemperatureById = async (req: Request, res: Response, next: NextFunction) => {
    
    const id = req.params.id;
    //Get  docs from DB
    const temp =
      await this.temperatureService.readById(id)
    
    // //if success return Array of docs
    return res.status(200).json({data:temp});
  };

  postTemperature = async (req: Request, res: Response, next: NextFunction) => {
    const temp: TemperatureDto = {
      date: req.body.date,
      location: req.body.location,
      temperature: req.body.temperature,
    };
    const result = await this.temperatureService.saveTemperature(temp);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: 'Failed to save temperature',
      });
    }
    return res.status(201).json({
      success: true,
    });
  };

  updateTemperature = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    // Get docs from db
    try {
      const temp: TemperatureDto = {
        date: req.body.date,
        location: req.body.location,
        temperature: req.body.temperature,
      };
      const id = req.params.id;


      let result: TemperatureDto =
        await this.temperatureService.updateTemperature(id, temp);
      //check if failed and return 500
      if (!result) {
        return res.status(500).json({
          sucess: false,
          message: 'Failed to update Temperature Sensor',
        });
      }
      //Send response
      return res.status(200).json({
        success: true,
        message: 'Successfully updated on Database',
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: error,
      });
    }
  };
  deleteTemperature = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const result = await this.temperatureService.deleteTemperature(id);

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
