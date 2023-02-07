import { Response, Request, NextFunction } from 'express'

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req?.session.user) return res.sendStatus(401)

        const userRole = (req.session.user.role as string).toLowerCase()
        console.log('session role :' + userRole)

        if (!roles.includes(userRole))
            return res.status(401).send('Unauthorized content')

        next()
    }
}
