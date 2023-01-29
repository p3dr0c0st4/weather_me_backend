import { UserDto } from '@user/dtos/userDto'

export default interface ICrudUser {
    create(data: UserDto): Promise<boolean>
    getUser(filter: string): Promise<UserDto | null>
}
