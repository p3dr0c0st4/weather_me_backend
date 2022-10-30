import ICrudHumidity from '../../../../db/interfaces/ICrudHumidity';
import { HumidityDto } from '../../../../../components/humidity/dtos/humidityDto';
import {pool} from '../database';


export default class HumidityRepository implements ICrudHumidity {

    //create Row
    create(data: HumidityDto): Promise<boolean> {

        const temp:Promise<boolean> = pool.query(`INSERT INTO humidity ( humidity, location, date) VALUES (${data.humidity}, ${data.location}, ${data.date})`);
        return Promise.resolve(temp);

    };

    //read Row
    async read(filter: any): Promise<HumidityDto[]> {

        if(filter){
            return await pool.query(`SELECT * FROM WHERE id = ${filter.id}`);
        };

        return await pool.query(`SELECT * FROM humidity`);
    };

    //update Row
    async updateById(id: string, data: HumidityDto): Promise<HumidityDto> {
        
        return await pool.query(`UPDATE humidity SET humidity = ${data.humidity}, location = ${data.location}, date = ${data.date} WHERE id = ${id}`);

    };

    //Delete Row
    async deleteById(id: string): Promise<boolean> {
        
        return await pool.query(`DELETE FROM humidity WHERE id = ${id}`);

    };
};