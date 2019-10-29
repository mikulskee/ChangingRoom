import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { SearchContext } from "../../contexts/SearchContext";

import { ShopContext } from "../../contexts/ShopContext";
import { SearchInputContext } from "../../contexts/SearchInputContext";
import { openInput, closeInput } from "../../animations/InputAnimations";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  margin-right: 16px;
  width: 360px;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 1;
  div.search {
    position: relative;
    display: flex;
    button {
      cursor: pointer;

      svg {
        pointer-events: none;
      }
    }
    input {
      position: absolute;
      top: 50%;
      transform: translateY(100%);
      width: 214px;

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
  button {
    background: none;
    border: none;
    padding: 5px 8px;
    &:focus {
      outline: none;
    }
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

const Icons = props => {
  const { shopItems } = useContext(ShopContext);
  const { cartItems } = useContext(CartContext);
  const { inputValue, setInputValue } = useContext(SearchInputContext);
  const { addSearchItem, setSearchedWord } = useContext(SearchContext);

  const handleSearch = _ => {
    const divSearch = document.querySelector("div.search");
    divSearch.classList.toggle("active");

    if (divSearch.classList.contains("active")) {
      openInput();
    } else if (!divSearch.classList.contains("active")) {
      closeInput();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchedWord(inputValue);
    const descriptions = shopItems
      .filter(item => item.products)
      .map(item => item.products);

    const merged = [].concat
      .apply([], descriptions)
      .map(item => item.description.toLowerCase());

    const results = merged.filter(
      item => item.indexOf(inputValue.toLowerCase()) > -1
    );

    let toDispatch = [];
    for (let i = 0; i < results.length; i++) {
      const descriptions = shopItems
        .filter(item => item.products)
        .map(item => item.products);

      const merged = [].concat.apply([], descriptions);
      const searchedItem = merged.filter(
        item => item.description.toLowerCase() === results[i]
      )[0];

      toDispatch.push(searchedItem);
    }
    addSearchItem(toDispatch);
    props.history.push("/search");
  };

  return (
    <Wrapper className="icons">
      <button className="user">
        <FontAwesomeIcon icon={faUser} />
      </button>

      <div className="search">
        <button className="search" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type="text"
            className="search"
            placeholder="Czego szukasz? (koszula, spodnie)"
          />
        </form>
      </div>

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

export default withRouter(Icons);
