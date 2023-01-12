// import UserController from '@user/controller/UserController';
import { postLogin } from '@user/controller/UserController';

import express from 'express';

export default function () {
  /**
   * /api/v1/user
   */
  const router = express.Router({ mergeParams: true });

  // const {
  //   postLogin
  // } = new UserController;

  router.route('/login').post([],postLogin)


  return router;
}
