import { NextFunction, Response, Request } from 'express'

export default class UserController {
    constructor() {}

    postLogin = (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body

        if (username === 'admin' && password === 'admin') {
            req.session.user = {
                name: username,
            }

            return res.status(200).json('success')
        }

        return res
            .status(401)
            .json({
                message: 'The username and password your provided are invalid',
            })
    }

    logout = (req: Request, res: Response, next: NextFunction) => {
        if (req.session.user) {
            delete req.session.user
        }
        res.status(204).json('success')
    }
}
