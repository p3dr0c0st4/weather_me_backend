import humiditySchema, {
  toDto,
} from "@db/implementation/mongodb/schemas/humiditySchema";
import ICrudHumidity from "@db/interfaces/ICrudHumidity";
import { HumidityDto } from "@humidity/dtos/humidityDto";

class HumidityRepository implements ICrudHumidity {
  createTable(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  create(data: HumidityDto): Promise<boolean> {
    const temp = new humiditySchema({
      id: undefined,
      location: data.location,
      date: data.date,
      humidity: data.humidity,
    });

    return Promise.resolve(temp.save() !== null);
  }

  async read(filter: any): Promise<HumidityDto[]> {
    const docs = await humiditySchema.find({ filter });
    return docs.map((x) => toDto(x));
  }

  async readById(id: string): Promise<HumidityDto | null> {
    const docs = await humiditySchema.findById(id);
    if (!docs) {
      return null;
    }

    return toDto(docs);
  }

  async updateById(
    id: string,
    data: HumidityDto
  ): Promise<HumidityDto | never> {
    let doc = await humiditySchema
      .findOneAndUpdate(
        { _id: id },
        { $set: data },
        {
          new: true,
        }
      )
      .exec();

    if (!doc) {
      throw new Error("Could not update humidity");
    }

    return toDto(doc);
  }

  async deleteById(id: string): Promise<boolean> {
    const doc: any = await humiditySchema.findByIdAndDelete(id);
    return Promise.resolve(doc.deleteOne);
  }
}
export default HumidityRepository;
