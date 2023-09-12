import RamazonApp from './app.js';

describe('RamazonApp', () => {
    let ramazonApp;
    beforeEach(() => {
        ramazonApp= new RamazonApp();
    })
    afterEach(() => {
        ramazonApp.productList = []; //her testden sonra resetleme
    });

    test('addToList should add a product to the productList', () => {
        ramazonApp.addToList('Product', 'Description');
        expect(ramazonApp.productList[0].id).toEqual(1);
    });

    test('removeProduct should remove a product from productList', () => {
        ramazonApp.removeProduct(1);
        expect(ramazonApp.productList.find(item => item.id === 1)).toBeUndefined();
    });

    test('editProduct should edit a product', () => {
        ramazonApp.editProduct(1);
        const editedProduct = ramazonApp.productList.find(item => item.id === 1);
        expect(editedProduct).toBeDefined(); // Make sure the product is still in the list
        expect(editedProduct.name).toEqual('XYZ'); // Assert the edited name
        expect(editedProduct.description).toEqual('Sample Desc'); // Assert the edited description
    });

    test('deleteById should delete product from productList', () => {
        ramazonApp.deleteById(1);
        expect(ramazonApp.productList.find(item => item.id === 1)).toBeUndefined();
    });
});