import { UserDto } from "@user/dtos/userDto";


export default interface ICrudUser {
    create(data: UserDto): Promise<boolean>;
}