import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Product from "../Product/Product";

import Footer from "../Footer/Footer";
import { ProductsWrapper } from "../ProductsWrapper/ProductsWrapper";
import { ShopContext } from "../../contexts/ShopContext";
import ProductBanner from "../ProductBanner/ProductBanner";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  margin: 0 auto;
  padding-top: 50px;
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    padding-top: 80px;
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin-right: 20px;
    padding-left: 23%;
    padding-top: 100px;
  }
  @media only screen and (min-width: 1300px) {
    margin: 0 auto;
  }
`;

const Products = props => {
  const { shopItems } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const newProducts = shopItems
    .filter(i => i.section === props.match.params.section_id)[0]
    .products.map(product => (
      <Product
        key={product.description}
        bg={product.img}
        description={product.description}
        price={product.price}
        selected={product.selected}
      />
    ));

  return (
    <ProductsWrapper>
      <ProductBanner />
      <Container>{newProducts}</Container>
      <Footer />
    </ProductsWrapper>
  );
};
export default Products;
