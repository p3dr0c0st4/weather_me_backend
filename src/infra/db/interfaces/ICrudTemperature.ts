import { TemperatureDto } from '@temperature/dtos/temperatureDto'

export default interface ICrudTemperature {
    create(data: TemperatureDto): Promise<boolean>
    read(filter: any): Promise<TemperatureDto[]>
    readById(id: string): Promise<TemperatureDto | null>
    updateById(
        id: string,
        data: TemperatureDto
    ): Promise<TemperatureDto | never>
    deleteById(id: string): Promise<boolean>
    createTable(): Promise<boolean>
}
