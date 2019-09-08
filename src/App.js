import React, { Component } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import Burger from "./components/Burger/Burger";
import Icons from "./components/Icons/Icons";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation>
          <Burger />
          <Logo />
          <Icons />
        </Navigation>
        <Header />
        <Main />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
