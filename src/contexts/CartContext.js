import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = newProduct => {
    setCartItems([...cartItems, newProduct]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
