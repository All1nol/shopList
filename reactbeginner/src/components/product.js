import React, { createContext, useContext, useState } from 'react';
const ProductContext = createContext();
export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (newProductItem) => {
    setProductList([...productList, newProductItem]);
  };

  const deleteProduct = (id) => {
    const updatedList = productList.filter(item => item.id !== id);
    setProductList(updatedList);
  };

  const editProduct = (id, name) => {
    const updatedList = productList.map(item => (item.id === id ? { ...item, name } : item));
    setProductList(updatedList);
  };

  return (
    <ProductContext.Provider value={{ productList, addProduct, deleteProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
