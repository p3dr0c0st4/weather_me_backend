import {saveTemperature} from '../../../../src/components/temperature/services/temperatureService';
import {saveTemperatureParams} from '../../../../src/components/temperature/services/temperatureService';


describe('Temperature Services unit tests', () =>{

     test('Save temperature (from post to db)', () => {

                   

          const response = {
               location: "casa",
               date: 1616,
               temperature: 22
          }

          saveTemperature(response).then(resp => {
               expect(resp).toBe({response})
          }) 


     });
     
});

