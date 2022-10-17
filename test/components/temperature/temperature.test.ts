import supertest from 'supertest';
import express from 'express'
import TemperatureController from '../../../src/components/temperature/controller/TemperatureController'
import TemperatureService from '../../../src/components/temperature/services/TemperatureService';
import MockDb from '../../../src/infra/db/implementation/mockDb/MockDb';
import {TemperatureDto} from '../../../src/components/temperature/dtos/temperatureDto';
import { isReadable } from 'stream';


const mockDb = new MockDb();
const temperatureService = new TemperatureService(mockDb)
const temperatureCtrl = new TemperatureController(temperatureService);


const app = express();




describe('*temperature*', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('GET TEMPERATURE', () => {

    app.use('/api/v1/temperature', async (req, res, next) => {
      return await temperatureCtrl.getTemperature(req, res, next)
    });

    describe('Check on temperatureController', () => {
      
      it('Does it get to temperatureController ?', async () => {

        const tempControllerSpy = jest
          .spyOn(temperatureCtrl, 'getTemperature');

        const res = await supertest(app).get(`/api/v1/temperature`);

        expect(tempControllerSpy).toBeCalledTimes(1);  

      })
    });

    describe('Check on temperatureService', () => {

      it('Does it get to temperatureService ? ', async () => {

        const tempServiceSpy = jest
          .spyOn(temperatureService, 'readTemperature')
          .mockImplementation(() => Promise.resolve([]));

        const res = await supertest(app).get(`/api/v1/temperature`);

        expect(tempServiceSpy).toBeCalledTimes(1);

      });

      it('Does it return a 200 ?', async () => {

        const res = await supertest(app).get(`/api/v1/temperature`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
      });


    });

  });
  


//#####--#####
  describe('POST TEMPERATURE', () =>{

    app.use('/api/v1/temperature', async (req, res, next) => {
      return await temperatureCtrl.postTemperature(req, res, next)
    });
    
    describe('Check on temperatureController', () => {

      it('Does it get to temperatureController ?', async () => {     

        const tempControllerSpy = jest
          .spyOn(temperatureCtrl, 'postTemperature')
          .mockImplementation();
          
        const res:any = await supertest(app).post(`/api/v1/temperature`);
        const req:any = await supertest(app).post(`/api/v1/temperature`);
        const next:any = 'something'; 

        temperatureCtrl.postTemperature(req, res, next);
        
    
        expect(tempControllerSpy).toBeCalledTimes(1);
        
      });
      // it('Does it return code status 500, when failed ?', async () => {

      //   const tempControllerSpy = jest
      //     .spyOn(temperatureCtrl, 'postTemperature')
      //     .mockImplementation();

      //   const res:any = await supertest(app).post(`/api/v1/temperature`);
      //   const req:any = await supertest(app).post(`/api/v1/temperature`);
      //   const next:any = 'something'; 

          
      //   expect(res.statusCode).toBe(500);

      // })

    });

    describe('Check on temperatureService', () => {

      it('Does it get to temperatureService ?', async () => {

        const data = {
          id: 'id-123',
          temperature: 20,
          location: 'location',
          date: 101010
        }
        

        const tempServiceSpy = jest
        .spyOn(temperatureService, 'saveTemperature')
        .mockImplementation();

        const res = await supertest(app).post(`/api/v1/temperature`);
      
        temperatureService.saveTemperature(data);
      
        expect(tempServiceSpy).toBeCalledTimes(1);
      })    
    });

  });
  



//#####--#####
  describe('PATCH TEMPERATURE', () =>{

    app.use('/api/v1/temperature/:id', async (req, res, next) => {
      return await temperatureCtrl.updateTemperature(req, res, next)
    });

    const id = 'id-patch';
    
    const updateObject:TemperatureDto = {
      id: id,
      temperature: 62,
      location: 'locationUpdate',
      date: 1111
    }

    describe('Check on temperatureController', () => {  

      it('Does it get to temperatureController ?', async () => {

        const tempControllerSpy = jest
          .spyOn(temperatureCtrl, 'updateTemperature');

        const res:any = await supertest(app).patch(`/api/v1/temperature/${id}`);
        const req:any = await supertest(app).patch(`/api/v1/temperature/${id}`);
        const next:any = 'void';

        temperatureCtrl.updateTemperature(req, res, next);

        expect(tempControllerSpy).toHaveBeenCalled();  

      })
    });

    // describe('Check on temperatureService', () => {

      // it('Does it get to temperatureService ? ', async () => {

      //   const tempServiceSpy = jest
      //     .spyOn(temperatureService, 'updateTemperature')
      //     .mockResolvedValue([id, updateObject])

      //     const res:any = await supertest(app).patch(`/api/v1/temperature/${id}`);
      //     const req:any = await supertest(app).patch(`/api/v1/temperature/${id}`);
      //     const next:any = 'void';

      //   temperatureService.updateTemperature(id, updateObject);
        
      //   expect(tempServiceSpy).toBeCalledTimes(1);
      // });


    // });
  });
 



//#####--#####
  describe('DELETE TEMPERATURE', () =>{

    app.use('/api/v1/temperature/:id', async (req, res, next) => {
      return await temperatureCtrl.deleteTemperature(req, res, next)
    });

    const id = 'id-Delete';

    describe('Check on temperature Controller', () => {

      it('Does it get to temperatureController ?', async () =>{

        const tempControllerSpy = jest
          .spyOn(temperatureCtrl, 'deleteTemperature')
          .mockImplementation();

        const res:any = await supertest(app).delete(`/api/v1/temperature/${id}`);
        const req:any = await supertest(app).delete(`/api/v1/temperature/${id}`);
        const next:any = 'void';

        temperatureCtrl.deleteTemperature(req, res, next);
        
        expect(tempControllerSpy).toBeCalledTimes(1);
      });
    });

    describe('Check on temperature Service', () => {

      it('Does it get to temperatureService ?', async () =>{
        const tempServiceSpy = jest
          .spyOn(temperatureService, 'deleteTemperature')
          .mockImplementation();

        const res:any = await supertest(app).delete(`/api/v1/temperature/${id}`);
        const req:any = await supertest(app).delete(`/api/v1/temperature/${id}`);
        const next:any = 'void';

        temperatureService.deleteTemperature(id);
        
        expect(tempServiceSpy).toBeCalledTimes(1);

      });
    });
  });
});