import { TemperatureDto } from "@temperature/dtos/temperatureDto";

export default interface ICrudTemperature {
  create(data: TemperatureDto): Promise<boolean>;
  read(filter: any): Promise<TemperatureDto[]>;
  updateById(id: string, data: TemperatureDto): Promise<TemperatureDto | never>;
  deleteById(id: string): Promise<boolean>;
}
