import { Schema, model } from 'mongoose';
const sensors = new Schema({
  guid: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export default model('sensors', sensors);
