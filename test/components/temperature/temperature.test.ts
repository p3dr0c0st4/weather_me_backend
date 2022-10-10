import supertest from 'supertest';
import server from '../../../src/infra/server/server'
import mongoose, { mongo } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import MockDb from '../../../src/infra/db/implementation/mockDb/MockDb';
import application from '../../../src/app';


const mockDb = new MockDb(); 
const app = application(mockDb);

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
            it('return a 200', async () =>{
                
                const res = await supertest(app).get(`/api/v1/temperature`);
                expect(res.statusCode).toBe(200);
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