import React, { useState } from "react";
import "./App.css";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import { ProductProvider, useProduct } from './components/product';
function App() {
  const { productList, addProduct, deleteProduct, editProduct } = useProduct();
  const [newProduct, setNewProduct] = useState("");
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (newProduct.trim() === "") return;

    const newProductItem = {
      id: nanoid(),
      name: newProduct,
    };

    addProduct(newProductItem);
    setNewProduct("");
  };

  const handleEdit = (id) => {
    setEditing(id);
    const productToEdit = productList.find((product) => product.id === id);
    setEditValue(productToEdit.name);
  };

  const handleSaveEdit = (id) => {
    editProduct(id, editValue);
    setEditing(null);
  };

  const handleCancelEdit = () => {
    setEditing(null);
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
        <h2>Product List from ProductContext</h2>
        {productList.map((product) => (
          <li key={product.id}>
            {editing === product.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(event) => setEditValue(event.target.value)}
                />
                <button onClick={() => handleSaveEdit(product.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {product.name}
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AppWithProviders() {
  return (
    <ProductProvider>
      <App />
    </ProductProvider>
  );
}