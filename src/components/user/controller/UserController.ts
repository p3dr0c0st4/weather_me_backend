import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export default class UserController {
  constructor() {}

  postLogin = (req: Request, res: Response, next: NextFunction) => {
    // const JWT_SECRET = process.env.JWT_SECRET ?? '';

    const { username, password } = req.body;

    let signature = "";
    try {
      signature = jwt.sign({ user: "admin" }, process.env.JWT_SECRET as string);
    } catch (error) {
      return res.status(401).json({
        message: "Failed to generate token",
      });
    }

    if (username === "admin" && password === "admin") {
      res.cookie("jwt_token", "235234234", {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
      });
      return res.status(200).json({
        token: signature,
      });
    }

    return res
      .status(401)
      .json({ message: "The username and password your provided are invalid" });
  };
}
