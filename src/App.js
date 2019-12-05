import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Menu from "./components/Menu/Menu";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import CartTemplate from "./templates/CartTemplate/CartTemplate";
import Products from "./components/Products/Products";
import Search from "./components/Search/Search";
import CartContextProvider from "./contexts/CartContext";
import ShopContextProvider from "./contexts/ShopContext";
import SearchContextProvider from "./contexts/SearchContext";
import SearchInputContextProvider from "./contexts/SearchInputContext";

const App = () => {
  return (
    <ShopContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <SearchInputContextProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Menu />
              <Navigation />

              <Switch>
                <Route exact path="/" component={MainTemplate} />
                <Route exact path="/cart" component={CartTemplate} />
                <Route
                  exact
                  path="/products/:section_id"
                  component={Products}
                />
                <Route exact path="/search" component={Search} />
              </Switch>
            </BrowserRouter>
          </SearchInputContextProvider>
        </SearchContextProvider>
      </CartContextProvider>
    </ShopContextProvider>
  );
};

export default App;
