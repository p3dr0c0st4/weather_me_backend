import ICrudTemperature from '@db/interfaces/ICrudTemperature';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';
import { randomBytes } from 'crypto';

export default class TemperatureRepository implements ICrudTemperature {
  private data: Map<string, TemperatureDto>;

  constructor() {
    this.data = new Map<string, TemperatureDto>();
  }

  create(data: TemperatureDto): Promise<boolean> {
    const id = randomBytes(16).toString('hex');
    this.data.set(id, data);
    return Promise.resolve(true);
  }
  read(filter: any): Promise<TemperatureDto[]> {
    return Promise.resolve(
      [...this.data.entries()].map((x) => {
        return {
          id: x[0],
          temperature: x[1].temperature,
          location: x[1].location,
          date: x[1].date,
        };
      })
    );
  }
  updateById(id: string, data: TemperatureDto): Promise<TemperatureDto> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<boolean> {
    this.data.delete(id);
    return Promise.resolve(true);
  }
}
