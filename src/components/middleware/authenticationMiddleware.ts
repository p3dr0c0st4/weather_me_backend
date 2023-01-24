import { Response, Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const JWT_SECRET = process.env.JWT_SECRET ?? ''

    const token = req.headers.authorization
    console.log(token)

    if (!token) {
        return res.status(401).send('Forbidden')
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        // req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    next()
}

const verifyCookieSession = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const session = req.session.user

    if (!session) {
        return res.status(401).send('Forbidden')
    }

    next()
}

export default { verifyJWT, verifyCookieSession }
