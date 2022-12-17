import ICrudHumidity from '../../../../db/interfaces/ICrudHumidity';
import { HumidityDto } from '../../../../../components/humidity/dtos/humidityDto';
import { pool } from '../database';


export default class HumidityRepository implements ICrudHumidity {

    //create Row
    create = async (data: HumidityDto): Promise<boolean> | never => {

        const result = await pool.query("INSERT INTO humidity ( humidity, location, date) VALUES ($1, $2, to_timestamp($3))",[data.humidity, data.location, data.date]);
        return result.rowCount === 1;

    };

    //read Row
    async read(filter: any): Promise<HumidityDto[]> {

        const result = await pool.query<HumidityDto>("SELECT * FROM humidity WHERE id = $1",[filter]);
        return result.rows;
    };

    //update Row
    async updateById(id: string, data: HumidityDto): Promise<HumidityDto> {

        const result = await pool.query<HumidityDto>("UPDATE humidity SET humidity = $1, location = $2, date = to_timestamp($3) WHERE id = $4",[data.humidity,data.location,data.date,id]);
        console.log('update',result);
        return result.rows[0];

    };

    //Delete Row
    async deleteById(id: string): Promise<boolean> {

        const result = await pool.query("DELETE FROM humidity WHERE id = $1",[id]);
        return result.rowCount === 1;

    };

    createTable = async () => {
        const result = await pool.query(`CREATE TABLE IF NOT EXISTS humidity(
            id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            location VARCHAR (255) UNIQUE NOT NULL,
            date TIMESTAMP NOT NULL, 
            humidity INT NOT NULL
        )`);
        return result.rowCount !== 0;

    }
};