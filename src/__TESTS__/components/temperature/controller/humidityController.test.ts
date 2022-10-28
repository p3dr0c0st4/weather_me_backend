import supertest from 'supertest';
import express, { response } from 'express'
import HumidityController from '../../../../components/humidity/controller/humidityController';
import HumidityService from '../../../../components/humidity/services/HumidityService';
import MockDb from '../../../../infra/db/implementation/mockDb/MockDb';

const mockDb = new MockDb;
const mockHumidityService = new HumidityService(mockDb);


const app = express();
app.use(express.json());

describe('*Humidity*', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET HUMIDITY', () => {

        it('Should return 200 with empty array', async () => {
            const mockReadTemperature = jest.fn().mockImplementation(() => {
              return [];
            });
      
            mockHumidityService.readHumidity = mockReadTemperature;
            const {getHumidity} = new HumidityController(mockHumidityService);
      
            app.route('/api/v1/humidity').get(  (req, res, next) => {
              return getHumidity(req, res, next)
            });
      
            const res = await supertest(app).get(`/api/v1/humidity`);
      
        
            expect(mockHumidityService.readHumidity).toBeCalledTimes(1);
            expect(res.statusCode).toBe(200);
            expect(res.body.data).toEqual([]);
          });
      
            it('Should return 200', async () => {
              const mockReadTemperature = jest.fn().mockImplementation(() => {
                return true;
              });
      
              mockHumidityService.readHumidity = mockReadTemperature;
              const {getHumidity} = new HumidityController(mockHumidityService);
      
              app.route('/api/v1/humidity').get(  (req, res, next) => {
                return  getHumidity(req, res, next)
              });
      
      
              const res = await supertest(app).get(`/api/v1/humidity`);
      
          
              expect(mockHumidityService.readHumidity).toBeCalledTimes(1);
              expect(res.statusCode).toBe(200);
            });

          });

        describe('POST HUMIDITY', () => {

            it('Should return 201', async () => {     


                const mockSaveHumidity = jest.fn().mockImplementation(() => {
                  return true;
                });
        
                mockHumidityService.saveHumidity = mockSaveHumidity;
                const {postHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').post(  (req, res, next) => {
                  return  postHumidity(req, res, next)
                });
        
        
                const res = await supertest(app).post(`/api/v1/humidity`).send({
                  date: 1666034852,
                  location: 'location',
                  humidity: 40
                });
        
            
                expect(mockHumidityService.saveHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(201);
                expect(res.body.success).toBeTruthy();
                
                
              });
        
              it('Should return 500', async () => {
        
                const mockSaveHumidity = jest.fn().mockImplementation(() => {
                  return false;
                });
        
                mockHumidityService.saveHumidity = mockSaveHumidity;
                const {postHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').post(  (req, res, next) => {
                  return  postHumidity(req, res, next)
                });
        
        
                const res = await supertest(app).post(`/api/v1/humidity`).send({
                  date: 1666034852,
                  location: 'location',
                  humidity: 40
                });
        
            
                expect(mockHumidityService.saveHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(500);
                expect(res.body.success).toBeFalsy();
                expect(res.body.message).toEqual('Failed to save humidity');
        
              })

        });
    
        describe('PATCH HUMIDITY', () => {
    
            it('Should return 200', async () => {

                const mockUpdateHumidity = jest.fn().mockImplementation(() => {
                  return true;
                });
        
                mockHumidityService.updateHumidity = mockUpdateHumidity;
                const {updateHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').patch(  (req, res, next) => {
                  return  updateHumidity(req, res, next)
                });
        
              
                const res = await supertest(app).patch(`/api/v1/humidity`).query({ id: 'id-12' }).send({
                  date: 1111111,
                  location: 'location',
                  humidity: 20
                });
        
            
                expect(mockHumidityService.updateHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(200);
                expect(res.body.success).toBeTruthy();
              })
        
              it('Should return 500', async () => {
        
                const mockUpdateHumidity = jest.fn().mockImplementation(() => {
                  return false;
                });
        
                mockHumidityService.updateHumidity = mockUpdateHumidity;
                const {updateHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').patch(  (req, res, next) => {
                  return  updateHumidity(req, res, next)
                });
        
              
                const res = await supertest(app).patch(`/api/v1/humidity`).query({ id: 'id-12' }).send({
                  date: 1111111,
                  location: 'location',
                  humidity: 20
                });
        
            
                expect(mockHumidityService.updateHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(500);
                expect(res.body.success).not.toBeTruthy();
              })
        
              it('Should return 500 on throw', async () => {
        
                const mockUpdateHumidity = jest.fn().mockImplementation(() => {
                  throw new Error("mock");
                });
        
                mockHumidityService.updateHumidity = mockUpdateHumidity;
                const {updateHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').patch(  (req, res, next) => {
                  return  updateHumidity(req, res, next)
                });
        
                try {
                  const res = await supertest(app).patch(`/api/v1/humidity`).query({ id: 'id-12' }).send({
                    date: 1111111,
                    location: 'location',
                    humidity: 20
                  });
                } catch (error:unknown) {
                  expect(error).toBeInstanceOf(Error);
                  expect((error as Error).message).toEqual('mock');
                }
                
        
            
                expect(mockHumidityService.updateHumidity).toBeCalledTimes(1);
              })

        });
    
        describe('DELETE HUMIDITY', () => {
    
            it('Should return 200', async () =>{
        
                const mockDeleteTemperature = jest.fn().mockImplementation(() => {
                  return true;
                });
        
                mockHumidityService.deleteHumidity = mockDeleteTemperature;
                const {deleteHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').delete(  (req, res, next) => {
                  return  deleteHumidity(req, res, next)
                });
        
              
                const res = await supertest(app).delete(`/api/v1/humidity`).query({ id: 'id-12' });
            
                expect(mockHumidityService.deleteHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(200);
                expect(res.body.success).toBeTruthy();
                expect(res.body.message).toEqual('Successfully deleted on Database');
              });
        
              it('Should return 500', async () =>{
                
                const mockDeleteTemperature = jest.fn().mockImplementation(() => {
                  return false;
                });
        
                mockHumidityService.deleteHumidity = mockDeleteTemperature;
                const {deleteHumidity} = new HumidityController(mockHumidityService);
        
                app.route('/api/v1/humidity').delete(  (req, res, next) => {
                  return  deleteHumidity(req, res, next)
                });
        
              
                const res = await supertest(app).delete(`/api/v1/humidity`).query({ id: 'id-12' });
            
                expect(mockHumidityService.deleteHumidity).toBeCalledTimes(1);
                expect(res.statusCode).toBe(500);
                expect(res.body.success).toBeFalsy();
                expect(res.body.message).toEqual('Failed to delete object');
              });

        });

    });
