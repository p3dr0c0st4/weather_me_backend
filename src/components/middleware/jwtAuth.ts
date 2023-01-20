import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const JWT_SECRET = process.env.JWT_SECRET ?? "";

  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  next();
};
