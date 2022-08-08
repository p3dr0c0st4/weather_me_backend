import mongoose from 'mongoose';

const init = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/weatherme`
  );
  const db = mongoose.connection;

  db.on('error', (error) => console.log(error));
  db.once('open', () => console.log('Connected to Database'));
};
export default init;
