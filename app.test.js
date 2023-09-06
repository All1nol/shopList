import RamazonApp from './app.js';

describe('RamazonApp', () => {
    let ramazonApp;
    beforeEach(() => {
        ramazonApp= new RamazonApp();
    })

    test('addToList should add a product to the productList', () => {
        ramazonApp.addToList('Product','Description');
        const product = ramazonApp.productList[0] ;
        expect(product.id).toEqual(1);
    });

    
});