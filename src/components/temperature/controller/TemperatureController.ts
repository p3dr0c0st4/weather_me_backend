import { TemperatureDto } from '@temperature/dtos/temperatureDto';
import TemperatureService from '../services/TemperatureService';

import { NextFunction, Response, Request } from 'express';

class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  async getTemperature(req: Request, res: Response, next: NextFunction) {
    //Get all docs from DB
    const tempArr: TemperatureDto[] =
      await this.temperatureService.readTemperature();
    // //check if failed and return 500
    // //if success return Array of docs
    res.status(200).json(tempArr);
  }

  async postTemperature(req: Request, res: Response, next: NextFunction) {
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
  }

  async updateTemperature(req: Request, res: Response, next: NextFunction) {
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
      console.log(error);
      return res.status(500).json({
        sucess: false,
        message: error,
      });
    }
  }
}

export default TemperatureController;
