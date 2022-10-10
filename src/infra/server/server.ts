import express from 'express';
import application from '../../app';

const PORT = 3000;
const server = async () => {
  const app: express.Application = await application();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

export default server;