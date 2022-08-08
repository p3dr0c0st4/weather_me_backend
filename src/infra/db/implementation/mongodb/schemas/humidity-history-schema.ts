import { Schema, model } from 'mongoose';

const humidity = new Schema({
  location: String,
  humidity: String,
  date: String,
});

export default model('humidity', humidity);
