import { HumidityDto} from "@humidity/dtos/humidityDto";

export default interface ICrudHumidity {
    create(data: HumidityDto): Promise<boolean>;
    read(filter: any): Promise<HumidityDto[]>;
    readById(id:string): Promise<HumidityDto | null >;
    updateById(id: string, data: HumidityDto): Promise<HumidityDto | never>;
    deleteById(id: string): Promise<boolean>;
    createTable():Promise<boolean>;
}