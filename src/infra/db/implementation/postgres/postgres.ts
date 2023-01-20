import ICrudHumidity from "@db/interfaces/ICrudHumidity";
import ICrudTemperature from "@db/interfaces/ICrudTemperature";
import { IDatabase } from "@db/interfaces/IDatabase";
import { TemperatureDto } from "@temperature/dtos/temperatureDto";
import HumidityRepository from "../postgres/repositories/HumidityRepository";
import TemperatureRepository from "../postgres/repositories/TemperatureRepository";


export default class Postgres implements IDatabase {

    temperature: ICrudTemperature;
    humidity: ICrudHumidity;

    constructor(){
        this.temperature = new TemperatureRepository;
        this.humidity = new HumidityRepository;
    }

    async init(): Promise<void> {
        
       await this.temperature.createTable();
       await this.humidity.createTable();

        const val: TemperatureDto = {
            date: Date.now(),
            location: 'szgsfg',
            temperature: 123,
        }
        const val2: TemperatureDto = {
            date: Date.now(),
            location: 'szgsfg',
            temperature: 321,
        }
    }
} 