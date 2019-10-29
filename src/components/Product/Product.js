import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSearchPlus,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../contexts/ShopContext";
import { CartContext } from "../../contexts/CartContext";

const Wrapper = styled.div`
  width: 40%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
  @media only screen and (orientation: landscape) {
    width: 26%;
    margin: 0 30px 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 21%;
    height: 370px;
  }
  @media only screen and (min-width: 1366px) {
    height: 480px;
  }
  .cover {
    position: relative;
    height: 70%;
    width: 100%;
    display: flex;
    background-image: url(${({ bg }) => (bg ? bg : null)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.15s linear;
    font-size: 40px;
    color: white;
    justify-content: center;
    align-items: center;

    ::before {
      display: block;
      content: "";
      background-color: #000;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s linear;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:hover::before {
      opacity: 0.3;
    }
    &:hover svg {
      opacity: 1;
    }

    svg {
      position: relative;
      pointer-events: none;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.15s linear;
    }
  }
  .description {
    margin-top: 10px;
    margin-left: 5px;
    font-weight: 800;
    font-style: italic;
    font-size: 8px;
    @media only screen and (min-width: 1024px) {
      font-size: 12px;
    }
  }
  .price {
    font-weight: 800;
    margin-left: 5px;
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
  .buttons {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    button {
      background-color: #171717;
      color: white;
      font-size: 16px;
      border: none;
      padding: 5px 10px;
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.1s linear, color 0.1s linear;
      svg {
        pointer-events: none;
      }
      &.disabled,
      &.disabled:hover {
        opacity: 0.2;
        pointer-events: none;
        background-color: #171717;
        color: white;
      }
      &:focus {
        outline: none;
      }
      &.active,
      &.fav.active:hover {
        color: #ee5858;
        background-color: #fff;
      }
      &.add:hover,
      &.fav:hover {
        background-color: #aaa;
        color: #171717;
      }
    }
  }

  .full-size {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -9999;
    color: white;
    font-size: 30px;
    @media only screen and (min-width: 1024px) {
      font-size: 40px;
    }

    &.active {
      z-index: 9999;
      ::before {
        opacity: 0.45;
        filter: blur(2px);
      }
      img {
        transform: scale(1);
      }
    }
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 400vw;
      height: 400vh;
      transform: translate(-50%, -10%);
      content: "";
      background-color: #000;
      opacity: 0;
    }
    img {
      position: relative;
      z-index: 999;
      transform: scale(0);
      height: 85vh;

      @media only screen and (orientation: portrait) {
        width: 85vw;
        height: auto;
      }
    }
    svg {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(70%, -70%);
      z-index: 9999;
      cursor: pointer;
    }
  }
`;

const Product = props => {
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

  return (
    <Wrapper bg={props.bg}>
      <div className="full-size">
        <img src={props.bg} alt="zdjęcie produktu" />
        <FontAwesomeIcon icon={faTimesCircle} onClick={hideProduct} />
      </div>
      <div className="cover" onClick={showProduct}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </div>
      <p className="description">{props.description}</p>
      <p className="price">{props.price} zł</p>
      <div className="buttons">
        <button className="add" onClick={handleAdd}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button className="fav" onClick={handleFav}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </Wrapper>
  );
};

export default Product;
