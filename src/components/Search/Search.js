import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { SearchInputContext } from "../../contexts/SearchInputContext";
import { closeInput } from "../../animations/InputAnimations";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

const Wrapper = styled.section`
  padding-top: 10px;
  text-align: center;
`;

const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
`;
const Desccription = styled.p`
  text-align: center;
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  padding: 20px 0;
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
      selected={product.selected}
    />
  ));
  if (searchedItems.length === 0) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      {searchedItems.length === 0 ? (
        <Desccription>
          Brak wyników wyszukiwania dla słowa "{searchedWord}"
        </Desccription>
      ) : (
        <Desccription>
          Wyniki wyszukiwania dla słowa "{searchedWord}":
        </Desccription>
      )}

      <Container>{newProducts}</Container>
      <Footer />
    </Wrapper>
  );
};

export default withRouter(Search);
