import { Schema, model } from 'mongoose';

const temperature = new Schema({
  id: Number,
  location: String,
  date: Number,
  temperature: String
});

export default model('temperature', temperature);
