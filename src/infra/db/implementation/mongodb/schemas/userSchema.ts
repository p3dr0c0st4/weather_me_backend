import { UserDto } from '@user/dtos/userDto'
import { Schema, model, Document } from 'mongoose'

interface IUserSchema extends Document {
    id: string | number
    name: string
    password: string
    email: string
    role: string
}

export const toDto = (obj: IUserSchema): UserDto => {
    return {
        id: obj._id,
        name: obj.name,
        password: obj.password,
        email: obj.email,
        role: obj.role,
    }
}

const userSchema = new Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    role: { type: String, require: true },
})

export default model<IUserSchema>('user', userSchema)
