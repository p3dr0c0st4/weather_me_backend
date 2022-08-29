import temperatureSchema from '@db/implementation/mongodb/schemas/temperatureSchema';
import { create } from 'domain';



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

  return temp.updateOne({
    id: 15,
    location: 'apartamento',
    date: 808080,
    temperature: 25
  })

};
const readTemperature = () => {};
export { saveTemperature, readTemperature };
