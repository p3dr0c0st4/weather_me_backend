import ICrud from '@db/interfaces/ICrud';
import { IDatabase } from '@db/interfaces/IDatabase';
import mongoose from 'mongoose';
import TemperatureRepository from './repository/TemperatureRepository';

class MongoDB implements IDatabase{
  temperature: ICrud;
  
  constructor(){
    this.temperature = new TemperatureRepository();
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