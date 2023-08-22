class shopList {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    // this.image= image;
  }
}

const _getList = document.querySelector("#getList");
const addToList = document.querySelector("#addToList");
const removeFromList = document.querySelector("#removeFromList");
const editListItem = document.querySelector("#editListItem");

const productList = [];
let autoId = 1;

addToList.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInp = document.querySelector("#name");
  const descriptionInp = document.querySelector("#description");

  const name = nameInp.value;
  const description = descriptionInp.value;

  const newProduct = new shopList(autoId, name, description);
  productList.push(newProduct);
  console.log(productList);
  getList(newProduct);

  nameInp.value = "";
  descriptionInp.value = "";

  autoId++;
});

_getList.addEventListener("click", function (event) { 
  if (event.target.classList.contains("removeFromList")) {           //used gpt
    const idToDelete = parseInt(event.target.getAttribute("data-id"));
    _removeFromList(idToDelete);
    updateUI();
  } else if (event.target.classList.contains("editListItem")) {
    const idToEdit = parseInt(event.target.getAttribute("data-id"));
    editItem(idToEdit);
  }
});

function getList(square) {
  const productSquare = document.createElement("div");
  productSquare.classList.add("productSquare");
  productSquare.innerHTML = ` 
    <h2>${square.id}</h2> 
    <p>Name: ${square.name}</p>
    <p>Description: ${square.description}</p>
    <button class="removeFromList" data-id="${square.id}">Remove product</button>
    <button class="editListItem" data-id="${square.id}">Edit product</button>
  `;
  _getList.appendChild(productSquare);
}

function _removeFromList(id) {
  const indexToRemove = productList.findIndex(item => item.id === id);  //used gpt
  if (indexToRemove !== -1) {
    productList.splice(indexToRemove, 1);
  } else {
    console.log("Error");
  }
}

function editItem(itemId) {
  const newName = prompt("Enter the new name:");  // name gpt, description self
  const newDescription= prompt("Enter the new description");
  if (newName !== null && newName.trim() !== "") {
    if (newDescription !==null && newDescription.trim() !=="") {
    const itemIndex = productList.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      productList[itemIndex].name = newName;
      productList[itemIndex].description= newDescription;
      updateUI();
    } else {
      console.log("Error");
    }
  }
}
}

function updateUI() {
  _getList.innerHTML = "";
  productList.forEach(product => {
    const productSquare = document.createElement("div");
    productSquare.classList.add("productSquare");
    productSquare.innerHTML = ` 
      <h2>${product.id}</h2> 
      <p>Name: ${product.name}</p>
      <p>Description: ${product.description}</p>
      <button class="removeFromList" data-id="${product.id}">Remove product</button>
      <button class="editListItem" data-id="${product.id}">Edit product</button>
    `;
    _getList.appendChild(productSquare);
  });
}
