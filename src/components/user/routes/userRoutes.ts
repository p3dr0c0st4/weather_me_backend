import UserController from '@user/controller/UserController'
import UserService from '@user/services/UserService'
import { Router, NextFunction, Response, Request } from 'express'

export default function (userService: UserService) {
    /**
     * /api/v1/user
     */

    const router = Router({ mergeParams: true })
    const { login, logout, register } = new UserController(userService)

    router.route('/login').post(login)
    router.route('/logout').delete(logout)
    router.route('/register').post(register)

    return router
}
