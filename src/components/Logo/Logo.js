import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Container = styled.div`
  height: 8vw;
  @media only screen and (orientation: landscape) {
    height: 5vw;
  }
  img {
    display: block;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
};

export default Logo;
