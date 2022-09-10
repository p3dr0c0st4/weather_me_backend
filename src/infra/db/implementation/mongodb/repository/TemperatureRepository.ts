import temperatureSchema, {toDto} from '@db/implementation/mongodb/schemas/temperatureSchema';
import ICrud from '@db/interfaces/ICrud';
import { TemperatureDto } from '@temperature/dtos/temperatureDto';

class TemperatureRepository implements ICrud{
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
            const docs = await temperatureSchema.find({filter});
    return docs.map(x => toDto(x));
    }
    update(): void {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
}
export default TemperatureRepository;