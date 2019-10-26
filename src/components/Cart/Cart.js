import React from "react";
import styled from "styled-components";
import ProductInCart from "../ProductInCart/ProductInCart";

const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Cart = () => {
  return (
    <Wrapper>
      <ProductInCart />
    </Wrapper>
  );
};

export default Cart;
