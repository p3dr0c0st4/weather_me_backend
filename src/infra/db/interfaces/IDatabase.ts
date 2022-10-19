import ICrudTemperature from "./ICrudTemperature";

export interface IDatabase {
  temperature: ICrudTemperature;
  init(): void;
}