import MongoDB from '@db/implementation/mongodb/mongodb';
import application from '../../app';
import Environment from '../../config/environment';
import Postgres from '@db/implementation/postgres/postgres';


const PORT = Environment.express.port || 3000;

const server = async () => {
  const app = await application(new Postgres());
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

export default server;
