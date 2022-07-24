const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/wmdata';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

export const db = mongoose.connection;