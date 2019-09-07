import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  font-size: 16px;
  margin-right: 16px;

  button {
    background: none;
    border: none;
    padding: 5px 8px;
  }

  .cart {
    padding: 5px 0 5px 8px;
  }
`;

const Icons = () => {
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

      <button className="cart">
        <FontAwesomeIcon icon={faShoppingCart} /> (0)
      </button>
    </Wrapper>
  );
};

export default Icons;
