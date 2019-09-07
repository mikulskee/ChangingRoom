import React, { Component } from "react";
import Burger from "./components/Burger/Burger";
import Icons from "./components/Icons/Icons";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100vw;
  height: 12vw;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 0px 15px 16px -12px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
  z-index: 2;
  background-color: #fff;
  @media only screen and (orientation: landscape) {
    height: 8vw;
  }
`;

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
      </>
    );
  }
}

export default App;
