import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState(["elo", "cześć", "czołem"]);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
