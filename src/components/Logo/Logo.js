import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-main.png";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  height: 8vw;
  @media only screen and (orientation: landscape) {
    height: 5vw;
  }
  @media only screen and (min-width: 768px) {
    height: 6vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    display: block;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <Container to="/">
      <img src={logo} alt="" />
    </Container>
  );
};

export default Logo;
