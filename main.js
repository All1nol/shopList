class shopList {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class RamazonApp {
  constructor(productList, autoId) {
    this.productList = productList;
    this.autoId = autoId;
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

  updateUI() {
    const listContainer = document.querySelector("#getList");
    listContainer.innerHTML = "";

    this.productList.forEach(product => {
      const productSquare = document.createElement("div");
      productSquare.classList.add("productSquare");
      productSquare.innerHTML = `
        <h2>${product.id}</h2>
        <p>Name: ${product.name}</p>
        <p>Description: ${product.description}</p>
        <button class="removeFromList" data-id="${product.id}">Remove product</button>
        <button class="editListItem" data-id="${product.id}">Edit product</button>
      `;
      listContainer.appendChild(productSquare);
    });
  }
}

const productList = [];
let autoId = 1;

const ramazonApp = new RamazonApp(productList, autoId);
const product1= new RamazonApp("Milk", "This is milk");
const product2= new RamazonApp("Milk", "This is milk");

ramazonApp.addToList(product1);
ramazonApp.addToList(product2);

ramazonApp.editProduct(1,"Milk 2", "this is milk 2");
ramazonApp.removeProduct(2);


console.log(addToList);
addToList.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = document.querySelector("#name");
  const descriptionInput = document.querySelector("#description");

  const name = nameInput.value;
  const description = descriptionInput.value;

  ramazonApp.addToList(name, description);
  ramazonApp.updateUI();

  nameInput.value = "";
  descriptionInput.value = "";
});

listContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("removeFromList")) {
    const idToDelete = parseInt(event.target.getAttribute("data-id"));
    ramazonApp.removeProduct(idToDelete);
    ramazonApp.updateUI();
  } else if (event.target.classList.contains("editListItem")) {
    const idToEdit = parseInt(event.target.getAttribute("data-id"));
    const newName = prompt("Enter the new name:");
    const newDescription = prompt("Enter the new description:");
    if (newName !== null && newDescription !== null) {
      ramazonApp.editProduct(idToEdit, newName, newDescription);
      ramazonApp.updateUI();
    }
  }else if(event.target.classList.contains("deleteById")){
    const idToDelete = parseInt(event.target.getAttribute("data-id"));
    ramazonApp.deleteById(idToDelete);
    ramazonApp.updateUI();
  }
});

deleteProductBtn.addEventListener("click", function(event){
  event.preventDefault(); 
  const idToDelete = parseInt(document.querySelector("#deleteProductId").value);
  ramazonApp.deleteById(idToDelete);
  ramazonApp.updateUI();
});


ramazonApp.updateUI();
export default ramazonApp;

// addToList.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const nameInp = document.querySelector("#name");
//   const descriptionInp = document.querySelector("#description");

//   const name = nameInp.value;
//   const description = descriptionInp.value;

//   const newProduct = new shopList(autoId, name, description);
//   productList.push(newProduct);
//   console.log(productList);
//   getList(newProduct);

//   nameInp.value = "";
//   descriptionInp.value = "";

//   autoId++;
// });

// _getList.addEventListener("click", function (event) { 
//   if (event.target.classList.contains("removeFromList")) {           //used gpt
//     const indexToRemove = parseInt(event.target.getAttribute("data-id"));
//     _removeFromList(indexToRemove);
//     updateUI();
//   } else if (event.target.classList.contains("editListItem")) {
//     const idToEdit = parseInt(event.target.getAttribute("data-id"));
//     editItem(idToEdit);
//   }else if(event.target.classList.contains("removeProductBtn")){
//     const IdToDelete = parseInt(event.target.getAttribute("data-id"));
//     DeleteProductId(IdToDelete);
//   }
// });

// removeProductBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   const removeProductIdInp = parseInt(document.querySelector("#removeProductId").value);
//   DeleteProductId(removeProductIdInp);
//   updateUI();
// });

// function DeleteProductId(id){
//   const indexToRemove = productList.findIndex(item => item.id === id);  //used gpt
//   if (indexToRemove !== -1) {
//     productList.splice(indexToRemove, 1);
//   } else {
//     let error =prompt("item not exist");
//     console.log(error);
//   }
// }

// function _removeFromList(id) {
//   const indexToRemove = productList.findIndex(item => item.id === id);  //used gpt
//   if (indexToRemove !== -1) {
//     productList.splice(indexToRemove, 1);
//   } else {
//     console.log("Error");
//   }
// }

// function editItem(itemId) {
//   const newName = prompt("Enter the new name:");  // name gpt, description self
//   const newDescription= prompt("Enter the new description");
//   if (newName !== null && newName.trim() !== "") {
//     if (newDescription !==null && newDescription.trim() !=="") {
//     const itemIndex = productList.findIndex(item => item.id === itemId);
//     if (itemIndex !== -1) {
//       productList[itemIndex].name = newName;
//       productList[itemIndex].description= newDescription;
//       updateUI();
//     } else {
//       console.log("Error");
//     }
//   }
// }
// }
