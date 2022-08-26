import temperatureSchema from '@db/implementation/mongodb/schemas/temperatureSchema';

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
const readTemperature = () => {};
export { saveTemperature, readTemperature };
