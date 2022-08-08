import { Schema, model } from 'mongoose';

const location = new Schema({
  sensors: Array,
  guid: {
    type: String,
    required: true,
  },
});

export default model('location', location);
