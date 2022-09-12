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


    async update(filter: any): Promise<TemperatureDto[]> {

        let doc = await temperatureSchema.findOneAndUpdate(filter, update, {
            new: true
          });

          doc.map(x => {
            toDto(x);
            return {
                location: x.location,
                date: x.date,
                temperature: x.temperature
            }
          }); 

       /*  const docs = await temperatureSchema.find({filter})

        temperatureSchema.updateOne(filter, (docs:TemperatureDto)=>{
            
            return Promise.resolve (docs = {
                location: docs.location,
                date: docs.date,
                temperature: docs.temperature
            })
        })
        return docs; */
        
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
export default TemperatureRepository;