import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

const Wrapper = styled.div`
  font-size: 16px;
  margin-right: 16px;

  button {
    background: none;
    border: none;
    padding: 5px 8px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      padding: 5px 10px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    padding: 5px 8px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      padding: 5px 10px;
    }
    span {
      font-family: "Source Sans Pro", sans-serif;
    }
  }

  .cart {
    padding: 5px 0 5px 8px;
  }
`;

const Icons = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Wrapper>
      <button className="user">
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button className="search">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <button className="heart">
        {" "}
        <FontAwesomeIcon icon={faHeart} />
      </button>

      <Link to="/cart" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
        <span>({cartItems.length})</span>
      </Link>
    </Wrapper>
  );
};

export default Icons;
