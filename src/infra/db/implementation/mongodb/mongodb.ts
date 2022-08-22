import mongoose from 'mongoose';

const init = () => {
  console.log(process.env.DB_HOST)
  mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/weatherme`
  );
  const db = mongoose.connection;

  db.on('error', (error) => console.log(error));
  db.once('open', () => console.log('Connected to Database'));
};
export default init;
