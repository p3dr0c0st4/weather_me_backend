import {saveTemperature} from '../temperatureService';


describe('Temperature Services unit tests', () =>{

     test('Save temperature (from post to db)', () => {

          const response = {
               location: "casa",
               date: 1616,
               temperature: 22
          }

          expect(saveTemperature({
               location: "123",
               date: 124124,
               temperature: 20,

          })).toMatchObject(response);

     });
     
});

