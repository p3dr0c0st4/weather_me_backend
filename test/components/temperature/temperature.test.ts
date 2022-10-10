import supertest from 'supertest';
import server from '../../../src/infra/server/server'
import mongoose, { mongo } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server'


const startServer = server();

describe('temperature', () =>{

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();

        await mongoose.connect(mongoServer.getUri());
    })

    afterAll (async() =>{
        await mongoose.disconnect();
        await mongoose.connection.close();
    })


    describe('get temperature routes', () =>{
        describe('If temperature does not exist', () =>{         
            it('return a 404', async () =>{
                const temperatureId = 'temperature-1234';

                await supertest(startServer).get(`/api/v1/temperature`);
                expect(404);
            })
        });

    });
    describe('post temperature routes', () =>{

    });
    describe('patch temperature routes', () =>{

    });
    describe('delete temperature routes', () =>{

    });
});