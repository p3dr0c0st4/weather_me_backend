import TemperatureController from '../../../../src/components/temperature/controller/TemperatureController'
import TemperatureService from '../../../../src/components/temperature/services/TemperatureService';
import MongoDB from '../../../../src/infra/db/implementation/mongodb/MongoDB';

describe('Temperature Controllers', () => {

     describe('Temperature Controllers', () => {
          it('should get temperature', () => {
               const mongoDB = new MongoDB();
               const service = new TemperatureService(mongoDB);
               const ctrl = new TemperatureController(service)
               ctrl.getTemperature()
     
               

          });
     })
})