const mongoose = require('mongoose');
const temp = require('./schemas/temperature-history-schema');

const init = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/weatherme`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const db = mongoose.connection;

  db.on('error', (error) => console.log(error));
  db.once('open', () => console.log('Connected to Database'));
};
module.exports = init;
