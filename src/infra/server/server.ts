import MongoDB from '@db/implementation/mongodb/mongodb';
import { env } from 'process';
import application from '../../app';
import Environment from '../../config/environment';


const PORT = Environment.express.port || 3000;

const server = async () => {
  const app = await application(new MongoDB());
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

export default server;
