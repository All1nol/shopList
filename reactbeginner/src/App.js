import React, { useState } from 'react';
import './App.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

function App() {
  const [productList, setProductList] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const [editProductId, setEditProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (newProduct.trim() === '') return;

    const newProductItem = {
      id: nanoid(),
      name: newProduct,
    };

    setProductList([...productList, newProductItem]);
    setNewProduct('');
  };

  const handleDeleteProduct = (index) => {
    // const deletedProduct = productList[index].name;
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
    // alert(`Deleted product: ${deletedProduct}`);
  };

  const handleEditProduct = (index) => {
    if (editedProductName.trim() === '') return;
    const updatedList = [...productList];
    updatedList[index].name = editedProductName;
    setProductList(updatedList);
    setEditProductId(null);
    setEditedProductName('');
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Enter a product"
          value={newProduct}
          onChange={(event) => setNewProduct(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {editProductId === index ? (
              <div>
                <p>ID: {product.id}</p>
                <input
                  type="text"
                  value={editedProductName}
                  onChange={(event) => setEditedProductName(event.target.value)}
                />
                <button onClick={() => handleEditProduct(index)}>Save</button>
              </div>
            ) : (
              <div>
                <p>ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <button onClick={() => handleDeleteProduct(index)}>
                  Delete
                </button>
                <button onClick={() => setEditProductId(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
 

export default App;
