import ICrudTemperature from '../../../../db/interfaces/ICrudTemperature';
import { TemperatureDto } from '../../../../../components/temperature/dtos/temperatureDto';
import {pool} from '../database';


export default class TemperatureRepository implements ICrudTemperature {

    //create Row
    create(data: TemperatureDto): Promise<boolean> {

        const temp:Promise<boolean> = pool.query(`INSERT INTO temperature ( temperature, location, date) VALUES (${data.temperature}, ${data.location}, ${data.date})`);
        return Promise.resolve(temp);
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
};  