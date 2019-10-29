import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { SearchInputContext } from "../../contexts/SearchInputContext";
import { closeInput } from "../../animations/InputAnimations";
import Product from "../Product/Product";

const Wrapper = styled.section`
  padding-top: 200px;
  text-align: center;
`;

const Search = props => {
  const {
    resetSearchedItems,
    setSearchedWord,
    searchedWord,
    searchedItems
  } = useContext(SearchContext);
  const { setInputValue } = useContext(SearchInputContext);

  useEffect(() => {
    return () => {
      resetSearchedItems();
      setSearchedWord("");
      setInputValue("");
      closeInput();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname]);

  const newProducts = searchedItems.map(product => (
    <Product
      key={product.description}
      bg={product.img}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <Wrapper>
      Wyniki wyszukiwania dla słowa "{searchedWord}" {newProducts}
    </Wrapper>
  );
};

export default withRouter(Search);
