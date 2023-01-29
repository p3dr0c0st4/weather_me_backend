import { UserDto } from '@user/dtos/userDto'
import UserService from '@user/services/UserService'
import { NextFunction, Response, Request } from 'express'

export default class UserController {
    constructor(private userService: UserService) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body
        const dbUser = await this.userService.getUser(username)

        if (!dbUser) console.log('user not found')

        console.log('user email: ' + dbUser?.email)

        if (username === dbUser?.username && password === dbUser?.password) {
            req.session.user = {
                name: username,
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
                role: req.body.role,
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
}
