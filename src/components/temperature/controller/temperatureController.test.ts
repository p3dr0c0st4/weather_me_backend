import {getTemperature} from '../../../../__mocks__/temperatureController';


describe('Temperature Controllers Unit tests', () =>{

    test('getTemperature test ', () => {

                   
        const response = {
             location: "casa",
             date: 1616,
             temperature: 22
        }

        getTemperature(req, res, next).then(res => {
             expect(res).toBe({response});
        }) 


   });
})