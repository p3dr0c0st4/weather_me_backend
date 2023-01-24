import ICrudHumidity from '@db/interfaces/ICrudHumidity'
import ICrudTemperature from '@db/interfaces/ICrudTemperature'
import ICrudUser from '@db/interfaces/ICrudUser'
import { IDatabase } from '@db/interfaces/IDatabase'
import mongoose from 'mongoose'
import TemperatureRepository from './repositories/TemperatureRepository'
import HumidityRepository from './repositories/HumidityRepository'
import UserRepository from './repositories/UserRepository'
import Environment from 'src/config/environment'

class MongoDB implements IDatabase {
    temperature: ICrudTemperature
    humidity: ICrudHumidity
    user: ICrudUser

    constructor() {
        this.temperature = new TemperatureRepository()
        this.humidity = new HumidityRepository()
        this.user = new UserRepository()
    }

    async init() {
        await mongoose.connect(
            `mongodb://${Environment.mongoDB.host}:${Environment.mongoDB.port}/weatherme`
        )
        const db = mongoose.connection

        db.on('error', error => console.log(error))
        db.once('open', () => console.log('Connected to Database'))
    }
}

export default MongoDB
