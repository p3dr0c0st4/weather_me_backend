import { Schema, model, Document } from 'mongoose';

export interface ITemperature extends Document{
  id?: number,
  location: string,
  date: number,
  temperature: number
}

const temperatureSchema = new Schema({
  id: Number,
  location: String,
  date: Number,
  temperature: Number
});

export default model('temperature', temperatureSchema);
