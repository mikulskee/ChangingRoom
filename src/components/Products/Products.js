import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSearchPlus,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Footer/Footer";
import { ProductsWrapper } from "../ProductsWrapper/ProductsWrapper";
import { ShopContext } from "../../contexts/ShopContext";
import { CartContext } from "../../contexts/CartContext";
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
  padding-top: 80px;
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    padding-top: 135px;
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin-right: 20px;
    padding-left: 23%;
    padding-top: 165px;
  }
  @media only screen and (min-width: 1300px) {
    margin: 0 auto;
  }
`;

const Products = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { shopItems } = useContext(ShopContext);
  const { addProductToCart } = useContext(CartContext);
  const handleFav = e => {
    e.target.classList.toggle("active");
  };
  const handleAdd = e => {
    e.target.classList.add("disabled");
    const keyID = e.target.parentNode.parentNode.querySelector(".description")
      .innerText;
    const sectionID = props.match.params.section_id;

    const addedProduct = shopItems
      .filter(item => item.section === sectionID)[0]
      .products.filter(item => item.description === keyID)[0];

    addProductToCart(addedProduct);
  };
  const showProduct = e => {
    e.target.previousSibling.classList.add("active");
  };
  const hideProduct = e => {
    const fullSize = document.querySelector(".full-size.active");
    fullSize.classList.remove("active");
  };

  const newProducts = shopItems
    .filter(i => i.section === props.match.params.section_id)[0]
    .products.map(product => (
      <Product key={product.description} bg={product.img}>
        <div className="full-size">
          <img src={product.img} alt="zdjęcie produktu" />
          <FontAwesomeIcon icon={faTimesCircle} onClick={hideProduct} />
        </div>
        <div className="cover" onClick={showProduct}>
          <FontAwesomeIcon icon={faSearchPlus} />
        </div>
        <p className="description">{product.description}</p>
        <p className="price">{product.price} zł</p>
        <div className="buttons">
          <button className="add" onClick={handleAdd}>
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button className="fav" onClick={handleFav}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </Product>
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
