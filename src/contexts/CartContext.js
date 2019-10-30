import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = newProduct => {
    setCartItems([...cartItems, newProduct]);
  };
  const removeProductFromCart = productID => {
    const newProductsInBasket = cartItems.filter(
      item => item.description !== productID
    );
    setCartItems(newProductsInBasket);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProductToCart, removeProductFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
