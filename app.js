class shopList {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  class RamazonApp {
    constructor(productList, autoId) {
      this.productList = [];
      this.autoId = 1;
    }
  
    addToList(name, description) {
      const newProduct = new shopList(this.autoId, name, description);
      this.productList.push(newProduct);
      console.log(newProduct);
      this.autoId++;
      return newProduct;
    }
  
    removeProduct(id) {
      const indexToRemove = this.productList.findIndex(item => item.id === id);
      if (indexToRemove !== -1) {
        this.productList.splice(indexToRemove, 1);
      }
    }
  
    editProduct(id, newName, newDescription) {
      const product = this.productList.find(item => item.id === id);
      if (product) {
        product.name = newName;
        product.description = newDescription;
      }
    }
  
    deleteById(id){
      const indexToRemove = this.productList.findIndex(item=> item.id ===id);
      if (indexToRemove !== -1) {
        productList.splice(indexToRemove,1);
      }else{
        let error = prompt("index do not exist");
        console.log(error);
      }
    }
  }
  
//   const productList = [];
//   let autoId = 1;
//   console.log(addToList);

  export default RamazonApp;
