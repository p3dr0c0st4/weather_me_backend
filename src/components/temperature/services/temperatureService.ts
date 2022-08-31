import temperatureSchema, {toDto} from '@db/implementation/mongodb/schemas/temperatureSchema';
import { db } from '@db/implementation/mongodb/mongodb';
import { ITemperatureDto } from '@temperature/controller/temperatureController';

export type saveTemperatureParams = {
  location: string;
  date: number;
  temperature: number;
};

const saveTemperature = (data: saveTemperatureParams) => {

  const temp = new temperatureSchema({
    id: undefined,
    location: data.location,
    date: data.date,
    temperature: data.temperature,
  });

  return temp.save();
};
const readTemperature = async (filter?:any):Promise<ITemperatureDto[]> => {
  const docs = await temperatureSchema.find(filter);
  return docs.map(x => toDto(x));
};
export { saveTemperature, readTemperature };
