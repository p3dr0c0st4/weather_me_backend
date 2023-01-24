import ICrudUser from '@db/interfaces/ICrudUser'
import { UserDto } from '@user/dtos/userDto'
import userSchema from '../schemas/userSchema'

class UserRepository implements ICrudUser {
    create(data: UserDto): Promise<boolean> {
        const temp = new userSchema({
            id: undefined,
            name: data.name,
            password: data.password,
            email: data.email,
            role: data.role,
        })

        return Promise.resolve(temp.save() !== null)
    }
}

export default UserRepository
