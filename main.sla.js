import ramazonApp, { addToList, productList, removeProduct, editProduct } from './main.js'; 
describe('RamazonApp', () => {

  beforeEach(async() => {
    const {window} = await JSDOM.fromFile("./index.html")
    const {document} = window;
    global.document= document;
    console.log(document.innerHTML);
    ramazonApp = new RamazonApp([], 1);
  });

  test('addToList should add a product to the productList', () => {
    const product = addToList('Test Product', 'Test Description');
    expect(productList).toContain(product);
  });

  test('removeProduct should remove a product from the productList', () => {
    const product = addToList('Test Product', 'Test Description');
    removeProduct(product.id);
    expect(productList).not.toContain(product);
  });

  test('editProduct should update the name and description of a product', () => {
    const product = addToList('Test Product', 'Test Description');
    editProduct(product.id, 'Updated Product', 'Updated Description');
    expect(product.name).toBe('Updated Product');
    expect(product.description).toBe('Updated Description');
  });
});


