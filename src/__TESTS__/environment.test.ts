import Environment from '../config/environment';

describe('Environment Variables', () => {

    it('Should return mongoDB host variable value ', () => {
        
        expect(Environment.mongoDB.host).toEqual("127.0.0.1");
        expect(Environment.mongoDB.host).not.toEqual("Hello");

        expect(Environment.mongoDB.port).toBe(27019);
        expect(Environment.mongoDB.port).not.toEqual("Hello");

        expect(Environment.express.port).toEqual(3000);
        expect(Environment.express.port).not.toEqual("Hello");
    });
})