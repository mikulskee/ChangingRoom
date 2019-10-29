import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { SearchInputContext } from "../../contexts/SearchInputContext";
import { closeInput } from "../../animations/InputAnimations";

const Wrapper = styled.section`
  padding-top: 200px;
  text-align: center;
`;

const Search = props => {
  const { resetSearchedItems, setSearchedWord, searchedWord } = useContext(
    SearchContext
  );
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
  return <Wrapper>Wyniki wyszukiwania dla słowa "{searchedWord}" </Wrapper>;
};

export default withRouter(Search);
