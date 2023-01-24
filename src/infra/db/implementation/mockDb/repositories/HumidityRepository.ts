import ICrudHumidity from '@db/interfaces/ICrudHumidity'
import { HumidityDto } from '@humidity/dtos/humidityDto'
import { randomBytes } from 'crypto'

export default class HumidityRepository implements ICrudHumidity {
    private data: Map<string, HumidityDto>

    constructor() {
        this.data = new Map<string, HumidityDto>()
    }
    createTable(): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    readById(id: string): Promise<HumidityDto | null> {
        throw new Error('Method not implemented.')
    }

    create(data: HumidityDto): Promise<boolean> {
        const id = randomBytes(16).toString('hex')
        this.data.set(id, data)
        return Promise.resolve(true)
    }
    read(filter: any): Promise<HumidityDto[]> {
        return Promise.resolve(
            [...this.data.entries()].map(x => {
                return {
                    id: x[0],
                    humidity: x[1].humidity,
                    location: x[1].location,
                    date: x[1].date,
                }
            })
        )
    }
    updateById(id: string, data: HumidityDto): Promise<HumidityDto> {
        throw new Error('Method not implemented.')
    }
    deleteById(id: string): Promise<boolean> {
        this.data.delete(id)
        return Promise.resolve(true)
    }
}
