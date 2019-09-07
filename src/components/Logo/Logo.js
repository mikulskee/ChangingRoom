import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Container = styled.div`
  height: 25px;
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
