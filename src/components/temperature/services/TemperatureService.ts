import { IDatabase } from '@db/interfaces/IDatabase';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

class TemperatureService {
  constructor(private db: IDatabase) {}

  saveTemperature(data: TemperatureDto) {
    return this.db.temperature.create(data);
  }

  async readTemperature(filter?: any): Promise<TemperatureDto[]> {
    return await this.db.temperature.read(filter);
  }

  async updateTemperature(
    id: string,
    update: TemperatureDto
  ): Promise<TemperatureDto | never> {
    return await this.db.temperature.updateById(id, update);
  }
}
export default TemperatureService;
