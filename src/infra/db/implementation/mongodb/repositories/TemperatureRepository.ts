import temperatureSchema, {toDto} from '@db/implementation/mongodb/schemas/temperatureSchema';
import ICrudTemperature from '@db/interfaces/ICrudTemperature';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

class TemperatureRepository implements ICrudTemperature {
  create(data: TemperatureDto): Promise<boolean> {
    const temp = new temperatureSchema({
      id: undefined,
      location: data.location,
      date: data.date,
      temperature: data.temperature,
    });

    return Promise.resolve(temp.save() !== null);
  }

  async read(filter: any): Promise<TemperatureDto[]> {
    const docs = await temperatureSchema.find({ filter });
    return docs.map((x) => toDto(x));
  }

  async updateById(
    id: string,
    data: TemperatureDto
  ): Promise<TemperatureDto | never> {
    let doc = await temperatureSchema
      .findOneAndUpdate(
        { _id: id },
        {$set: data },
        {
          new: true,
        }
      )
      .exec();

    if (!doc) {
      throw new Error('Could not update temperature');
    }

    return toDto(doc);
  }

  async deleteById(id:string): Promise<boolean> {

    const doc:any = await temperatureSchema.findByIdAndDelete(id)
    return Promise.resolve(doc.deleteOne)
    
  }
}
export default TemperatureRepository;