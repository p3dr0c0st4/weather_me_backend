import ICrudHumidity from '@db/interfaces/ICrudHumidity';
import ICrudTemperature from '@db/interfaces/ICrudTemperature';
import { IDatabase } from '@db/interfaces/IDatabase';
import mongoose from 'mongoose';
import TemperatureRepository from './repositories/TemperatureRepository';
import HumidityRepository from './repositories/HumidityRepository';

class MongoDB implements IDatabase{
  temperature: ICrudTemperature;
  humidity: ICrudHumidity;
  
  constructor(){
    this.temperature = new TemperatureRepository();
    this.humidity = new HumidityRepository();
  }

  init(){
    mongoose.connect(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/weatherme`
    );
    const db = mongoose.connection;

    db.on('error', (error) => console.log(error));
    db.once('open', () => console.log('Connected to Database'));
  };
}

export default MongoDB;