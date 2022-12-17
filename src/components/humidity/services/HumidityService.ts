import { IDatabase } from '@db/interfaces/IDatabase';
import { HumidityDto } from '@humidity/dtos/humidityDto';

export default class HumidityService {
  constructor(private db: IDatabase) {}

  saveHumidity = (data: HumidityDto) => {
    return this.db.humidity.create(data);
  };

  readHumidity = (filter?: any): Promise<HumidityDto[]> => {
    return this.db.humidity.read(filter);
  };

  readById = (id: string): Promise<HumidityDto | null> => {
    return this.db.humidity.readById(id)
  }

  updateHumidity= (
    id: string,
    update: HumidityDto
  ): Promise<HumidityDto | never> => {
    return this.db.humidity.updateById(id, update);
  };

  deleteHumidity = (id: string): Promise<boolean> => {
    return this.db.humidity.deleteById(id);
  };
}

