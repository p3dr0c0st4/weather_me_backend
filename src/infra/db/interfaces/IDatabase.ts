import ICrudHumidity from "./ICrudHumidity";
import ICrudTemperature from "./ICrudTemperature";

export interface IDatabase {
  temperature: ICrudTemperature;
  humidity: ICrudHumidity;
  init(): void;
}