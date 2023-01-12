import * as dotenv from "dotenv";
import express, { NextFunction, Response, Request } from 'express';
import routesV1 from './api/v1';
import cors from 'cors';
import { IDatabase } from '@db/interfaces/IDatabase';
// import userRoutes from "@user/routes/userRoutes";
import jwt from 'jsonwebtoken';


const application = async (db:IDatabase) => {
  //Initialize db
  db.init();

  const app = express();
  app.use(cors());
  app.use(express.json());

  //---------------------------------------//---------------------------------------//---------------------------------------
  const postLogin =  (req: Request, res: Response, next: NextFunction) => {
          // const JWT_SECRET = process.env.JWT_SECRET ?? '';
        
        const { username, password } =  req.body;
        console.log(`${username} is trying to login ..`);

        if (username === "admin" && password === "admin") {
            
            return res
                .status(200)
                .json({
                    token: jwt.sign({ user: "admin" }, process.env.JWT_SECRET as string),
                });
        }

        return res
            .status(401)
            .json({ message: "The username and password your provided are invalid" });
      }
  //---------------------------------------//---------------------------------------//---------------------------------------

  app.use('/api/v1', routesV1(db));
  app.use('/login', postLogin);
  // app.use('/user', userRoutes())
  app.get('/ping', (req, res) => {
    res.json({ success: true });
  });
  return app;
};
export default application;