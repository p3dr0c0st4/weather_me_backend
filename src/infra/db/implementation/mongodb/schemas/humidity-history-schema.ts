import { Schema, model } from 'mongoose';

const humidity = new Schema({
  id: Number,
  location: String,
  date: Number,
  humidity: String
  
});

export default model('humidity', humidity);
