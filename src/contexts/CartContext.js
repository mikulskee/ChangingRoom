import React, { createContext, useState } from "react";
import tshirt1 from "../images/products/t-shirts/1.jpg";
import shirts3 from "../images/products/shirts/3.jpg";
import jackets5 from "../images/products/jackets/5.jpg";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState([
    { description: "Czerwony t-shirt z orłem", img: tshirt1, price: 69 },
    {
      description: "Biała bluzka z kwiecistym wzorem",
      img: shirts3,
      price: 79
    },
    {
      description: "Kraciasty płaszcz z kapturem",
      img: jackets5,
      price: 99
    }
  ]);

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
