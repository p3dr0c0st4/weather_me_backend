import TemperatureController from '@temperature/controller/TemperatureController'
import TemperatureService from '../services/TemperatureService'
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

    router.route('/').get(getTemperature).post(postTemperature)

    router
        .route('/:id')
        .patch(updateTemperature)
        .delete(deleteTemperature)
        .get(getTemperatureById)

    return router
}
