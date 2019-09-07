import React from "react";
import styled from "styled-components";
import header1 from "../../images/header1.jpg";

const Container = styled.header`
  position: relative;
  @media only screen and (orientation: landscape) {
    top: -10vw;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(106, 106, 106, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    opacity: 0.45;
  }
  img {
    display: block;
    width: 100vw;
  }

  h1 {
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-weight: 300;
    font-size: 28px;
    line-height: 1.1;
    letter-spacing: 2px;
    span {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 12px;
      letter-spacing: 8px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <img src={header1} alt="" />
      <h1>
        jesień 2019 <br />
        <span>casual</span>
      </h1>
    </Container>
  );
};

export default Header;
