import ICrudHumidity from './ICrudHumidity'
import ICrudTemperature from './ICrudTemperature'
import ICrudUser from './ICrudUser'

export interface IDatabase {
    temperature: ICrudTemperature
    humidity: ICrudHumidity
    user: ICrudUser
    init(): void
}
