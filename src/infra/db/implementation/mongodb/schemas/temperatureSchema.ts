import { Schema, model } from 'mongoose';

const temperatureSchema = new Schema({
  id: Number,
  location: String,
  date: Number,
  temperature: Number,
});

export default model('temperature', temperatureSchema);
