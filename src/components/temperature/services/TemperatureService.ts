import { IDatabase } from '@db/interfaces/IDatabase';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

class TemperatureService{
  constructor(private db:IDatabase){

  } 

  saveTemperature(data: TemperatureDto) {
    return this.db.create(data);
  };

  async readTemperature (filter?:any):Promise<TemperatureDto[]>  {
    return this.db.read(filter);
  };
}
export default TemperatureService;
