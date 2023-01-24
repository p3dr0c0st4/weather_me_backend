import * as dotenv from 'dotenv'
import express from 'express'
import routesV1 from './api/v1'
import cors from 'cors'
import { IDatabase } from '@db/interfaces/IDatabase'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { randomString } from '@utils/cryptoUtils'

const application = async (db: IDatabase) => {
    //Initialize db
    await db.init()

    const app = express()
    app.use(express.json())
    app.use(cookieParser())

    app.use(
        cors({
            origin: 'http://localhost:3001',
            credentials: true,
        })
    )
    app.use(
        session({
            secret: process.env.SESSION_SECRET as string,
            resave: false,
            saveUninitialized: true,
            unset: 'destroy',
            name: '_session',
            genid: req => {
                return randomString()
            },
        })
    )

    app.use('/api/v1', routesV1(db))
    app.get('/ping', (req, res) => {
        res.json({ success: true })
    })
    return app
}
export default application
