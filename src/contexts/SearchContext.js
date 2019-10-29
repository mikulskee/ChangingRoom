import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = props => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");

  const addSearchItem = product => {
    setSearchedItems(product);
  };

  const resetSearchedItems = () => {
    setSearchedItems([]);
  };

  return (
    <SearchContext.Provider
      value={{
        searchedItems,
        addSearchItem,
        resetSearchedItems,
        searchedWord,
        setSearchedWord
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
