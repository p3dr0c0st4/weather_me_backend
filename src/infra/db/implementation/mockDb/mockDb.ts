import ICrudTemperature from '@db/interfaces/ICrudTemperature';
import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureRepository from './repositories/TemperatureRepository';

export default class MockDb implements IDatabase {
  temperature: ICrudTemperature;

  constructor() {
    this.temperature = new TemperatureRepository();
  }
  init(): void {
    return;
  }
}
