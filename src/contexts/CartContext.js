import React, { createContext, useState, useContext, useEffect } from "react";
import { ShopContext } from "./ShopContext";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cart-items");
    return localData ? JSON.parse(localData) : [];
  });
  const { shopItems } = useContext(ShopContext);
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProductToCart = newProduct => {
    setCartItems([...cartItems, newProduct]);
  };
  const removeProductFromCart = productID => {
    const items = shopItems
      .filter(item => item.products)
      .map(item => item.products);
    const changedObject = [].concat
      .apply([], items)
      .filter(item => item.description === productID)[0];
    changedObject["selected"] = false;

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
