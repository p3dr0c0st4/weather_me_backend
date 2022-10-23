import ICrud from '@db/interfaces/ICrud';
import { IDatabase } from '@db/interfaces/IDatabase';
import TemperatureRepository from './repositories/TemperatureRepository';

export default class MockDb implements IDatabase {
  temperature: ICrud;

  constructor() {
    this.temperature = new TemperatureRepository();
  }
  init(): void {
    return;
  }
}
