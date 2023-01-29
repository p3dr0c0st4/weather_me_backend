import express from 'express'
import temperatureRoutes from '@temperature/routes/temperatureRoutes'
import { IDatabase } from '@db/interfaces/IDatabase'
import TemperatureService from '@temperature/services/TemperatureService'
import HumidityService from '@humidity/services/HumidityService'
import humidityRoutes from '@humidity/routes/humidityRoutes'
import userRoutes from '@user/routes/userRoutes'
import authenticationMiddleware from '@middleware/authenticationMiddleware'
import UserService from '@user/services/UserService'

/**
 * /api/v1
 */
export default function (db: IDatabase) {
    const router = express.Router({ mergeParams: true })

    const temperatureService = new TemperatureService(db)
    const humidityService = new HumidityService(db)
    const userService = new UserService(db)

    //Middleware
    const authVerify = authenticationMiddleware.verifyCookieSession
    //Routes
    router.use('/user', userRoutes(userService))
    router.use(
        '/temperature',
        authVerify,
        temperatureRoutes(temperatureService)
    )
    router.use('/humidity', authVerify, humidityRoutes(humidityService))

    return router
}
