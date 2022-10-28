import { HumidityDto} from "@humidity/dtos/humidityDto";

export default interface ICrudHumidity {
    create(data: HumidityDto): Promise<boolean>;
    read(filter: any): Promise<HumidityDto[]>;
    updateById(id: string, data: HumidityDto): Promise<HumidityDto | never>;
    deleteById(id: string): Promise<boolean>;
}