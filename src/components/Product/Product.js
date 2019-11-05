import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../contexts/ShopContext";
import { CartContext } from "../../contexts/CartContext";
import { withRouter } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media only screen and (orientation: landscape) {
    width: 26%;
    margin: 0 30px 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 29%;
    height: 370px;
  }
  @media only screen and (min-width: 1366px) {
    height: 480px;
  }
  .cover {
    position: relative;
    height: 80%;
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
  .details {
    width: 80%;
    .description {
      margin-top: 10px;
      margin-left: 5px;
      font-weight: 800;
      font-style: italic;
      font-size: 8px;
      text-align: left;
      @media only screen and (min-width: 1024px) {
        font-size: 12px;
      }
    }
    .price {
      font-weight: 800;
      margin-left: 5px;
      text-align: left;
      @media only screen and (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }

  .buttons {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    button {
      color: #171717;
      font-size: 16px;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      background: none;
      transition: background-color 0.1s linear, color 0.1s linear;

      ${({ selected }) =>
        selected &&
        css`
          opacity: 0.2;
          pointer-events: none;
          color: black;
        `}

      svg {
        pointer-events: none;
      }
      &.disabled {
        opacity: 0.2;
        pointer-events: none;
        color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }

  .full-size {
    position: fixed;
    display: none;
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
      display: block;
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
  const { searchedItems } = useContext(SearchContext);

  const handleAdd = e => {
    e.target.classList.add("disabled");
    const keyID = e.target.parentNode.parentNode.querySelector(".description")
      .innerText;
    const sectionID = props.match.params.section_id;

    if (props.location.pathname === "/search") {
      const addedProduct = searchedItems.filter(
        item => item.description === keyID
      )[0];
      addedProduct["selected"] = true;
      addProductToCart(addedProduct);
    } else {
      const addedProduct = shopItems
        .filter(item => item.section === sectionID)[0]
        .products.filter(item => item.description === keyID)[0];
      addedProduct["selected"] = true;
      addProductToCart(addedProduct);
    }
  };
  const showProduct = e => {
    e.target.previousSibling.classList.add("active");
  };
  const hideProduct = e => {
    const fullSize = document.querySelector(".full-size.active");
    fullSize.classList.remove("active");
  };

  return (
    <Wrapper bg={props.bg} selected={props.selected}>
      <div className="full-size">
        <img src={props.bg} alt="zdjęcie produktu" />
        <FontAwesomeIcon icon={faTimesCircle} onClick={hideProduct} />
      </div>
      <div className="cover" onClick={showProduct}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </div>
      <div className="details">
        {" "}
        <p className="description">{props.description}</p>
        <p className="price">{props.price} zł</p>
      </div>
      <div className="buttons">
        <button className="add" selected={props.selected} onClick={handleAdd}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </Wrapper>
  );
};

export default withRouter(Product);
