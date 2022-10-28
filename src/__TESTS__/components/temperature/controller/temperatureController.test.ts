import supertest from 'supertest';
import express, { response } from 'express'
import TemperatureController from '../../../../components/temperature/controller/TemperatureController'
import TemperatureService from '../../../../components/temperature/services/TemperatureService';
import MockDb from '../../../../infra/db/implementation/mockDb/MockDb';


const mockDb = new MockDb();
const mockTemperatureService = new TemperatureService(mockDb)



const app = express();
app.use(express.json());

// .get(async (req, res, next) => {
//   return await temperatureCtrl.getTemperature(req, res, next)
// }).patch(async (req, res, next) => {
//   return await temperatureCtrl.updateTemperature(req, res, next)
// }).delete(async (req, res, next) => {
//   return await temperatureCtrl.deleteTemperature(req, res, next)
// });



describe('*temperature*', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('GET TEMPERATURE', () => {

    it('Should return 200 with empty array', async () => {
      const mockReadTemperature = jest.fn().mockImplementation(() => {
        return [];
      });

      mockTemperatureService.readTemperature = mockReadTemperature;
      const {getTemperature} = new TemperatureController(mockTemperatureService);

      app.route('/api/v1/temperature').get(  (req, res, next) => {
        return getTemperature(req, res, next)
      });


      const res = await supertest(app).get(`/api/v1/temperature`);

  
      expect(mockTemperatureService.readTemperature).toBeCalledTimes(1);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual([]);
    });

      it('Should return 200', async () => {
        const mockReadTemperature = jest.fn().mockImplementation(() => {
          return true;
        });

        mockTemperatureService.readTemperature = mockReadTemperature;
        const {getTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').get(  (req, res, next) => {
          return  getTemperature(req, res, next)
        });


        const res = await supertest(app).get(`/api/v1/temperature`);

    
        expect(mockTemperatureService.readTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(200);
      });
    });

  


//#####--#####
  describe('POST TEMPERATURE', () =>{

      it('Should return 201', async () => {     


        const mockSaveTemperature = jest.fn().mockImplementation(() => {
          return true;
        });

        mockTemperatureService.saveTemperature = mockSaveTemperature;
        const {postTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').post(  (req, res, next) => {
          return  postTemperature(req, res, next)
        });


        const res = await supertest(app).post(`/api/v1/temperature`).send({
          date: 1666034852,
          location: 'location',
          temperature: 40
        });

    
        expect(mockTemperatureService.saveTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBeTruthy();
        
        
      });

      it('Should return 500', async () => {

        const mockSaveTemperature = jest.fn().mockImplementation(() => {
          return false;
        });

        mockTemperatureService.saveTemperature = mockSaveTemperature;
        const {postTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').post(  (req, res, next) => {
          return  postTemperature(req, res, next)
        });


        const res = await supertest(app).post(`/api/v1/temperature`).send({
          date: 1666034852,
          location: 'location',
          temperature: 40
        });

    
        expect(mockTemperatureService.saveTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(500);
        expect(res.body.success).toBeFalsy();
        expect(res.body.message).toEqual('Failed to save temperature');

      })
  });
  



//#####--#####
  describe('PATCH TEMPERATURE', () =>{



      it('Should return 200', async () => {

        const mockUpdateTemperature = jest.fn().mockImplementation(() => {
          return true;
        });

        mockTemperatureService.updateTemperature = mockUpdateTemperature;
        const {updateTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').patch(  (req, res, next) => {
          return  updateTemperature(req, res, next)
        });

      
        const res = await supertest(app).patch(`/api/v1/temperature`).query({ id: 'id-12' }).send({
          date: 1111111,
          location: 'location',
          temperature: 20
        });

    
        expect(mockTemperatureService.updateTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBeTruthy();
      })

      it('Should return 500', async () => {

        const mockUpdateTemperature = jest.fn().mockImplementation(() => {
          return false;
        });

        mockTemperatureService.updateTemperature = mockUpdateTemperature;
        const {updateTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').patch(  (req, res, next) => {
          return  updateTemperature(req, res, next)
        });

      
        const res = await supertest(app).patch(`/api/v1/temperature`).query({ id: 'id-12' }).send({
          date: 1111111,
          location: 'location',
          temperature: 20
        });

    
        expect(mockTemperatureService.updateTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(500);
        expect(res.body.success).not.toBeTruthy();
      })

      it('Should return 500 on throw', async () => {

        const mockUpdateTemperature = jest.fn().mockImplementation(() => {
          throw new Error("mock");
        });

        mockTemperatureService.updateTemperature = mockUpdateTemperature;
        const {updateTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').patch(  (req, res, next) => {
          return  updateTemperature(req, res, next)
        });

        try {
          const res = await supertest(app).patch(`/api/v1/temperature`).query({ id: 'id-12' }).send({
            date: 1111111,
            location: 'location',
            temperature: 20
          });
        } catch (error:unknown) {
          expect(error).toBeInstanceOf(Error);
          expect((error as Error).message).toEqual('mock');
        }
        

    
        expect(mockTemperatureService.updateTemperature).toBeCalledTimes(1);
      })
    });
 


//#####--#####
  describe('DELETE TEMPERATURE', () =>{

      it('Should return 200', async () =>{
        
        const mockDeleteTemperature = jest.fn().mockImplementation(() => {
          return true;
        });

        mockTemperatureService.deleteTemperature = mockDeleteTemperature;
        const {deleteTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').delete(  (req, res, next) => {
          return  deleteTemperature(req, res, next)
        });

      
        const res = await supertest(app).delete(`/api/v1/temperature`).query({ id: 'id-12' });
    
        expect(mockTemperatureService.deleteTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBeTruthy();
        expect(res.body.message).toEqual('Successfully deleted on Database');
      });

      it('Should return 500', async () =>{
        
        const mockDeleteTemperature = jest.fn().mockImplementation(() => {
          return false;
        });

        mockTemperatureService.deleteTemperature = mockDeleteTemperature;
        const {deleteTemperature} = new TemperatureController(mockTemperatureService);

        app.route('/api/v1/temperature').delete(  (req, res, next) => {
          return  deleteTemperature(req, res, next)
        });

      
        const res = await supertest(app).delete(`/api/v1/temperature`).query({ id: 'id-12' });
    
        expect(mockTemperatureService.deleteTemperature).toBeCalledTimes(1);
        expect(res.statusCode).toBe(500);
        expect(res.body.success).toBeFalsy();
        expect(res.body.message).toEqual('Failed to delete object');
      });


    });
  });

