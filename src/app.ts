import * as dotenv from "dotenv";
import express, { NextFunction, Response, Request } from "express";
import routesV1 from "./api/v1";
import cors from "cors";
import { IDatabase } from "@db/interfaces/IDatabase";
import session, { Cookie } from 'express-session'
import cookieParser from 'cookie-parser'

// import userRoutes from "@user/routes/userRoutes";

const application = async (db: IDatabase) => {
  //Initialize db
  await db.init();

  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3001",
      credentials: true
    })
  );
  app.use(
    session({
      secret: process.env.JWT_SECRET as string,
      cookie: {
        secure: false,
        httpOnly: true,
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24
      },
      resave: false,
      saveUninitialized: true

    })
  )


  app.use(express.json());
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser());

  //----------------------------------------------------------------------------------------------
  app.post('/testing', (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (username === "testing" && password === "testing") {

      try {
        let session = req.session
        if (session) {
          res.status(201)
        }
      }
      catch (error) {
        return res.status(401).json({
          message: "Failed to create session"
        });
      }


    }

    return res
      .status(401)
      .json({ message: "The username and password your provided are invalid" });
  })
  //----------------------------------------------------------------------------------------------

  app.use("/api/v1", routesV1(db));
  app.get("/ping", (req, res) => {
    res.json({ success: true });
  });
  return app;
};
export default application;
