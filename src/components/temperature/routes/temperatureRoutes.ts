import TemperatureController from '@temperature/controller/TemperatureController'
import TemperatureService from '../services/TemperatureService'
import { authorize } from '@middleware/authorizationMiddleware'
import { Router } from 'express'

export default function (temperatureService: TemperatureService) {
    /**
     * /api/v1/temperature
     */
    const router = Router({ mergeParams: true })

    const {
        getTemperature,
        getTemperatureById,
        postTemperature,
        updateTemperature,
        deleteTemperature,
    } = new TemperatureController(temperatureService)

    // DB
    // |route|verb|roles
    // "temperature/id"|"get"|"user,manager,admin"
    // "temperature/id"|"post"|"user,manager,admin"

    const roles = {
        temperature: {
            get: ['user', 'admin', 'manager'],
            post: ['admin', 'manager'],
        },
        temperatureId: {
            patch: ['admin'],
            delete: ['admin'],
            get: ['user', 'admin', 'manager'],
        },
    }

    router
        .route('/')
        .get([authorize(roles.temperature.get)], getTemperature)
        .post([authorize(roles.temperature.post)], postTemperature)

    router
        .route('/:id')
        .patch([authorize(roles.temperatureId.patch)], updateTemperature)
        .delete([authorize(roles.temperatureId.delete)], deleteTemperature)
        .get([authorize(roles.temperatureId.get)], getTemperatureById)

    return router
}
