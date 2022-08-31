import { ITemperatureDto } from '@temperature/controller/temperatureController';
import { Schema, model, Document } from 'mongoose';

interface ITemperatureSchema extends Document{
  id:string,
  temperature: number,
  location: string,
  date: number
}

export const toDto = (obj:ITemperatureSchema):ITemperatureDto => {
  return {
    id: obj._id,
    temperature: obj.temperature,
    date: obj.date,
    location: obj.location
  }
} 

const temperatureSchema = new Schema({
  id: {type:Number, require:true},
  location: {type: String},
  date: {type:Number},
  temperature: {type:Number},
});

export default model<ITemperatureSchema>('temperature', temperatureSchema);