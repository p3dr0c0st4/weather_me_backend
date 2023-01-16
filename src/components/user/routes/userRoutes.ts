import UserController from "@user/controller/UserController";
import { Router, NextFunction, Response, Request } from "express";

export default function () {
  /**
   * /api/v1/user
   */
  const router = Router({ mergeParams: true });
  const { postLogin } = new UserController();

  router.route("/login").post(postLogin);

  return router;
}
