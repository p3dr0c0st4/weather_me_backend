import { TemperatureDto } from "@temperature/dtos/temperatureDto";

export default interface ICrud {
  create(data: TemperatureDto):Promise<boolean>;
  read(filter:any):Promise<TemperatureDto[]>;
  update():void;
  delete():void;
}