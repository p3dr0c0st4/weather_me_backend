import supertest from 'supertest';
import express from 'express'
import TemperatureController from '../../../src/components/temperature/controller/TemperatureController'
import TemperatureService from '../../../src/components/temperature/services/TemperatureService';
import MockDb from '../../../src/infra/db/implementation/mockDb/MockDb';

const mockDb = new MockDb();
const temperatureService = new TemperatureService(mockDb)
const temperatureCtrl = new TemperatureController(temperatureService);


const app = express()
  app.use('/api/v1/temperature', async (req,res,next)=>{
    return await temperatureCtrl.getTemperature(req,res,next)
  });

describe('temperature', () =>{
    describe('get temperature routes', () =>{
        describe('If temperature does not exist', () =>{ 
            it('return a 200', async () =>{
                const tempServiceSpy = jest
                  .spyOn(temperatureService, 'readTemperature')
                  .mockImplementation(() => Promise.resolve([]));
                const res = await supertest(app).get(`/api/v1/temperature`);

                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual([]);
            })
        });
    });
    // describe('post temperature routes', () =>{

    // });
    // describe('patch temperature routes', () =>{

    // });
    // describe('delete temperature routes', () =>{

    // });
});