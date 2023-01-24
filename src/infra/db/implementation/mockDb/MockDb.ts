import ICrudHumidity from '@db/interfaces/ICrudHumidity'
import ICrudTemperature from '@db/interfaces/ICrudTemperature'
import { IDatabase } from '@db/interfaces/IDatabase'
import TemperatureRepository from './repositories/TemperatureRepository'
import HumidityRepository from './repositories//HumidityRepository'

export default class MockDb implements IDatabase {
    temperature: ICrudTemperature
    humidity: ICrudHumidity

    constructor() {
        this.temperature = new TemperatureRepository()
        this.humidity = new HumidityRepository()
    }
    init(): void {
        return
    }
}
