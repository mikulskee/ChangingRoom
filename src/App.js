import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Menu from "./components/Menu/Menu";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import CartTemplate from "./templates/CartTemplate/CartTemplate";
import ProductsTemplate from "./templates/ProductsTemplate/ProductsTemplate";
import Search from "./components/Search/Search";
import CartContextProvider from "./contexts/CartContext";
import ShopContextProvider from "./contexts/ShopContext";
import SearchContextProvider from "./contexts/SearchContext";
import SearchInputContextProvider from "./contexts/SearchInputContext";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./animations/routeChanging";

const App = () => {
  return (
    <ShopContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <SearchInputContextProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Menu />
              <Navigation />
              <Route
                render={({ location }) => {
                  const { pathname, key } = location;

                  return (
                    <TransitionGroup component={null}>
                      <Transition
                        key={key}
                        appear={true}
                        onEnter={(node, appears) =>
                          play(pathname, node, appears)
                        }
                        onExit={(node, appears) => exit(node, appears)}
                        timeout={{ enter: 250, exit: 150 }}
                      >
                        <Switch location={location}>
                          <Route exact path="/" component={MainTemplate} />
                          <Route exact path="/cart" component={CartTemplate} />
                          <Route
                            exact
                            path="/products/:section_id"
                            component={ProductsTemplate}
                          />
                          <Route exact path="/search" component={Search} />
                        </Switch>
                      </Transition>
                    </TransitionGroup>
                  );
                }}
              />
            </BrowserRouter>
          </SearchInputContextProvider>
        </SearchContextProvider>
      </CartContextProvider>
    </ShopContextProvider>
  );
};

export default App;
