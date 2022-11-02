import ICrudTemperature from '../../../../db/interfaces/ICrudTemperature';
import { TemperatureDto } from '../../../../../components/temperature/dtos/temperatureDto';
import {pool} from '../database';
import { QueryResult } from 'pg';


export default class TemperatureRepository implements ICrudTemperature {

    //create Row
    create = async (data: TemperatureDto): Promise<boolean> | never => {

        const result = await pool.query(`INSERT INTO temperature ( temperature, location, date) VALUES (${data.temperature}, ${data.location}, ${data.date})`);      
        return result.rowCount === 1;
    };

    //Read Row
    async read(filter: any): Promise<TemperatureDto[]> {
        
        if(filter){
            return await pool.query(`SELECT * FROM WHERE id = ${filter.id}`);
        };

        return await pool.query(`SELECT * FROM temperature`);

    };

    //Update Row
    async updateById(id: string, data: TemperatureDto): Promise<TemperatureDto> {

        return await pool.query(`UPDATE temperature SET temperature = ${data.temperature}, location = ${data.location}, date = ${data.date} WHERE id = ${id}`);

    };

    //Delete Row
    async deleteById(id: string): Promise<boolean> {
        
        return await pool.query(`DELETE FROM temperature WHERE id = ${id}`);

    };
    createTable = async() =>{
       const result = await pool.query(`CREATE TABLE TEMPERATURE (  
        id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        date TIMESTAMP NOT NULL,
        location VARCHAR (255) UNIQUE NOT NULL,
        temperature INT NOT NULL
    )`);
    return result.rowCount !== 0;

    }
};  