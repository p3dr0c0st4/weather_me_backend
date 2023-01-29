import ICrudUser from '@db/interfaces/ICrudUser'
import { UserDto } from '@user/dtos/userDto'
import userSchema, { toDto } from '../schemas/userSchema'

class UserRepository implements ICrudUser {
    create(data: UserDto): Promise<boolean> {
        const temp = new userSchema({
            id: undefined,
            username: data.username,
            password: data.password,
            email: data.email,
            role: data.role,
        })

        return Promise.resolve(temp.save() !== null)
    }

    async getUser(filter: string): Promise<UserDto | null> {
        const docs = await userSchema.findOne({ username: filter })
        if (!docs) {
            return null
        }

        return toDto(docs)
    }
}

export default UserRepository
