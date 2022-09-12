import { IDatabase } from '@db/interfaces/IDatabase';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

class TemperatureService{
  constructor(private db:IDatabase){
  } 

  saveTemperature(data: TemperatureDto) {
    return this.db.temperature.create(data);
  };

  async readTemperature (filter?:any):Promise<TemperatureDto[]>  {
    return await this.db.temperature.read(filter);
  };

  async updateTemperature (filter?:any, update?:any):Promise<TemperatureDto[]>  {
    return await this.db.temperature.update(filter);
  };
}
export default TemperatureService;
