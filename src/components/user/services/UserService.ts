import { IDatabase } from '@db/interfaces/IDatabase'
import { UserDto } from '@user/dtos/userDto'

export default class UserService {
    constructor(private db: IDatabase) {}

    getUser = (filter: string): Promise<UserDto | null> => {
        return this.db.user.getUser(filter)
    }

    createUser = (data: UserDto): Promise<boolean> => {
        return this.db.user.create(data)
    }
}
