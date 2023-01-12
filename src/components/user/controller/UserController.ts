import * as dotenv from "dotenv";
import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

// export default class UserController {
//     constructor(){};

    export const postLogin =  (req: Request, res: Response, next: NextFunction) => {
        res.status(200);
        
        // // const JWT_SECRET = process.env.JWT_SECRET ?? '';
        
        // const { username, password } =  req.body;
        // console.log(`${username} is trying to login ..`);

        // if (username === "admin" && password === "admin") {
            
        //     return res
        //         .status(200)
        //         .json({
        //             token: jwt.sign({ user: "admin" }, process.env.JWT_SECRET as string),
        //         });
        // }

        // return res
        //     .status(401)
        //     .json({ message: "The username and password your provided are invalid" });

    }
// }