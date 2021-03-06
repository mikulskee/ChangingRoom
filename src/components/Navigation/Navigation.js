import React from "react";
import styled from "styled-components";
import Burger from "../Burger/Burger";
import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 15px 16px -12px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
  z-index: 3;
  background-color: #fff;
  &.active {
    @media only screen and (orientation: portrait) and (max-width: 560px) {
      justify-content: flex-start;
      div.icons {
        position: absolute;
        width: 100%;
        height: 100%;
        right: 10px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Burger />
      <Logo />
      <Icons />
      <DesktopNavigation />
    </Wrapper>
  );
};

export default Navigation;
