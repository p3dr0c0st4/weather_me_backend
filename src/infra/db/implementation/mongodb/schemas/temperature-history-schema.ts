import { Schema, model } from 'mongoose';

const temperature = new Schema({
  location: String,
  temperature: String,
  date: String,
});

export default model('temperature', temperature);
