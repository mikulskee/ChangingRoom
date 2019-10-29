import React, { createContext, useState } from "react";

export const SearchInputContext = createContext();

const SearchInputContextProvider = props => {
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchInputContext.Provider value={{ inputValue, setInputValue }}>
      {props.children}
    </SearchInputContext.Provider>
  );
};

export default SearchInputContextProvider;
