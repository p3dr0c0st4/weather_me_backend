import ICrudHumidity from "@db/interfaces/ICrudHumidity";
import ICrudTemperature from "@db/interfaces/ICrudTemperature";
import { IDatabase } from "@db/interfaces/IDatabase";
import HumidityRepository from "../postgres/repositories/HumidityRepository";
import TemperatureRepository from "../postgres/repositories/TemperatureRepository";


export default class Postgres implements IDatabase {

    temperature: ICrudTemperature;
    humidity: ICrudHumidity;

    constructor(){
        this.temperature = new TemperatureRepository;
        this.humidity = new HumidityRepository;
    }

    init(): void {
        return;
    }
} 