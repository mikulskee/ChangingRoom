import React from "react";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";
import { CartTemplateWrapper } from "../../components/CartTemplateWrapper/CartTemplateWrapper";

const CartTemplate = () => {
  return (
    <CartTemplateWrapper>
      <Cart />
      <Footer />
    </CartTemplateWrapper>
  );
};

export default CartTemplate;
