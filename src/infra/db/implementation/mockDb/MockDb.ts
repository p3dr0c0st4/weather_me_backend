import ICrudHumidity from '@db/interfaces/ICrudHumidity'
import ICrudTemperature from '@db/interfaces/ICrudTemperature'
import { IDatabase } from '@db/interfaces/IDatabase'
import TemperatureRepository from './repositories/TemperatureRepository'
import HumidityRepository from './repositories//HumidityRepository'
import ICrudUser from '@db/interfaces/ICrudUser'
import UserRepository from '../mongodb/repositories/UserRepository'

export default class MockDb implements IDatabase {
    temperature: ICrudTemperature
    humidity: ICrudHumidity
    user: ICrudUser

    constructor() {
        this.temperature = new TemperatureRepository()
        this.humidity = new HumidityRepository()
        this.user = new UserRepository()
    }
    init(): void {
        return
    }
}
