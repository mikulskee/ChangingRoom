import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import Icons from "./components/Icons/Icons";
import Logo from "./components/Logo/Logo";
import MainTemplate from "./templates/MainTemplate/MainTemplate";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Menu />
        <BrowserRouter>
          <Navigation>
            <Burger />
            <Logo />
            <Icons />
          </Navigation>
          <Route exact path="/" component={MainTemplate} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
