import { HumidityDto } from '@humidity/dtos/humidityDto'
import { Schema, model, Document } from 'mongoose'

interface IHumiditySchema extends Document {
    id: string
    humidity: number
    location: string
    date: number
}

export const toDto = (obj: IHumiditySchema): HumidityDto => {
    return {
        id: obj._id,
        humidity: obj.humidity,
        date: obj.date,
        location: obj.location,
    }
}

const humiditySchema = new Schema({
    id: { type: Number, require: true },
    location: { type: String },
    date: { type: Number },
    humidity: { type: Number },
})

export default model<IHumiditySchema>('humidity', humiditySchema)
