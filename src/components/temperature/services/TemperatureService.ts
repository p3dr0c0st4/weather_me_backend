import { IDatabase } from '@db/interfaces/IDatabase';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

export default class TemperatureService {
  constructor(private db: IDatabase) {}

  saveTemperature = (data: TemperatureDto) => {
    return this.db.temperature.create(data);
  };

  readTemperature = (filter?: any): Promise<TemperatureDto[]> => {
    return this.db.temperature.read(filter);
  };

  updateTemperature = (
    id: string,
    update: TemperatureDto
  ): Promise<TemperatureDto | never> => {
    return this.db.temperature.updateById(id, update);
  };

  deleteTemperature = (id: string): Promise<boolean> => {
    return this.db.temperature.deleteById(id);
  };
}

