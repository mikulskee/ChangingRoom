import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto 40px;
  max-width: 1320px;
  font-family: "Source Sans Pro", sans-serif;
  .image {
    width: 40%;
  }
  .product-name {
    width: 25%;
    font-size: 10px;
  }
  .price {
    width: 25%;
    font-size: 10px;
  }
`;

const Headlines = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  .product-name,
  .price {
    font-weight: 800;
    font-size: 12px;
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1300px) {
      font-size: 20px;
    }
  }

  ::after {
    position: absolute;
    display: block;
    content: "";
    height: 2px;
    width: 100%;
    background-color: #ccc;
    bottom: 0;
    left: 0;
  }
`;
const ProductDetails = styled.div`
  position: relative;
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  .product-name {
    font-weight: 600;
  }
  .product-name,
  .price {
    font-family: "Playfair Display", sans-serif;
    font-style: italic;
    font-size: 10px;
    @media only screen and (min-width: 1024px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 1300px) {
      font-size: 14px;
    }
  }
  ::after {
    position: absolute;
    display: block;
    content: "";
    height: 2px;
    width: 100%;
    background-color: #ccc;
    bottom: 0;
    left: 0;
  }
  .image {
    color: red;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 60px;
    font-size: 15px;
    @media only screen and (min-width: 768px) {
      height: 90px;
    }
    @media only screen and (min-width: 1024px) {
      height: 115px;
    }
    @media only screen and (min-width: 1024px) {
      height: 135px;
      font-size: 20px;
    }

    .product-image {
      height: 100%;
      width: 30%;
      background-image: url(${({ bg }) => (bg ? bg : null)});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .svg {
      padding: 10px;
      cursor: pointer;
    }
  }
`;

const CartTotals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  .product-name {
    text-align: right;
  }
  .product-name,
  .price {
    font-size: 16px;
    font-weight: 800;
    @media only screen and (min-width: 1300px) {
      font-size: 20px;
    }
  }
`;

const ProductInCart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  const Product = cartItems.map(item => (
    <ProductDetails key={item.description} bg={item.img}>
      <div className="image">
        <div className="svg">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <div className="product-image"></div>
      </div>
      <div className="product-name">{item.description}</div>
      <div className="price">{item.price} zł</div>
    </ProductDetails>
  ));

  const totalPrices = cartItems
    .map(item => item.price)
    .reduce((prevValue, currentValue) => prevValue + currentValue);

  return (
    <Wrapper>
      <Headlines>
        <div className="image"></div>
        <div className="product-name">Nazwa produktu</div>
        <div className="price">Cena</div>
      </Headlines>
      {Product}
      <CartTotals>
        <div className="image"></div>
        <div className="product-name">Suma:</div>
        <div className="price">{totalPrices} zł</div>
      </CartTotals>
    </Wrapper>
  );
};

export default ProductInCart;
