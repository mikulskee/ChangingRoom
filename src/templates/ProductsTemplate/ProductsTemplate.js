import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import { ProductsWrapper } from "../../components/ProductsWrapper/ProductsWrapper";
import { ShopContext } from "../../contexts/ShopContext";
import ProductBanner from "../../components/ProductBanner/ProductBanner";

import { withRouter } from "react-router-dom";

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
    padding-top: 40px;
  }
  @media only screen and (min-width: 1300px) {
    margin: 0 auto;
  }
`;

const ProductsTemplate = props => {
  const { shopItems } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <ProductsWrapper>
        <ProductBanner />
        <Container className={"product-card-wrapper"}>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    </>
  );
};
export default withRouter(ProductsTemplate);
