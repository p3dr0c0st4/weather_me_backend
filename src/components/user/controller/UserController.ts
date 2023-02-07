import { UserDto } from '@user/dtos/userDto'
import UserService from '@user/services/UserService'
import { NextFunction, Response, Request } from 'express'

export default class UserController {
    constructor(private userService: UserService) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body
        const user = await this.userService.getUser(username)

        if (!user) console.log('user not found')

        console.log('user role: ' + user?.role)

        if (username === user?.username && password === user?.password) {
            req.session.user = {
                username: user?.username as string,
                role: user?.role as string,
            }

            return res.status(200).json('success')
        }

        return res.status(401).json({
            message: 'The username and password your provided are invalid',
        })
    }

    logout = (req: Request, res: Response, next: NextFunction) => {
        if (req.session.user) {
            delete req.session.user
        }
        res.status(204).json('success')
    }

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: UserDto = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                role: (req.body.role as string).toLowerCase(),
            }

            const result = await this.userService.createUser(user)

            if (!result) {
                return res.status(500).json({
                    success: false,
                    message: 'Failed to register user',
                })
            }
            return res.status(201).json({
                success: true,
                message: 'User Resgisted',
            })
        } catch (error) {
            return res.status(500).json({
                sucess: false,
                message: error,
            })
        }
    }

    sessionCheck = async (req: Request, res: Response, next: NextFunction) => {
        const checkUser = req.session.user

        if (checkUser) {
            return res.status(200).send()
        }
        return res.status(401).send('forbidden')
    }
}
