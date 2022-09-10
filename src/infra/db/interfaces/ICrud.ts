import { TemperatureDto } from "@temperature/dtos/temperatureDto";

export default interface ICrud {
  create(data: TemperatureDto):Promise<boolean>;
  read(filter:any):Promise<TemperatureDto[]>;
  update(filter:any):Promise<TemperatureDto[]>;
  delete():void;
}