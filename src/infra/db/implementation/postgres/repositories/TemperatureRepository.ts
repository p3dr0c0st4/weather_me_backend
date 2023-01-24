import ICrudTemperature from '../../../../db/interfaces/ICrudTemperature'
import { TemperatureDto } from '../../../../../components/temperature/dtos/temperatureDto'
import { pool } from '../database'
import { QueryResult } from 'pg'

export default class TemperatureRepository implements ICrudTemperature {
    readById(id: string): Promise<TemperatureDto | null> {
        throw new Error('Method not implemented.')
    }

    //create Row
    create = async (data: TemperatureDto): Promise<boolean> | never => {
        const result = await pool.query(
            'INSERT INTO temperature ( temperature, location, date) VALUES ($1, $2, to_timestamp($3))',
            [data.temperature, data.location, data.date]
        )
        return result.rowCount === 1
    }

    //Read Row
    async read(filter: string): Promise<TemperatureDto[]> {
        const result = await pool.query<TemperatureDto>(
            'SELECT * FROM temperature WHERE id = $1',
            [filter]
        )
        return result.rows
    }

    //Update Row
    async updateById(
        id: string,
        data: TemperatureDto
    ): Promise<TemperatureDto> {
        const result = await pool.query<TemperatureDto>(
            'UPDATE temperature SET temperature = $1, location = $2, date = to_timestamp($3) WHERE id = $4',
            [data.temperature, data.location, data.date, id]
        )
        return result.rows[0]
    }

    //Delete Row
    async deleteById(id: string): Promise<boolean> {
        const result = await pool.query(
            'DELETE FROM temperature WHERE id = $1',
            [id]
        )
        return result.rowCount === 1
    }

    createTable = async () => {
        const result =
            await pool.query(`CREATE TABLE IF NOT EXISTS temperature(  
        id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        date TIMESTAMP NOT NULL,
        location VARCHAR (255) NOT NULL,
        temperature INT NOT NULL
    )`)
        return result.rowCount !== 0
    }
}
