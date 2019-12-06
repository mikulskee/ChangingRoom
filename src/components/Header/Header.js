import React, { useEffect } from "react";
import styled from "styled-components";
// import { headerAnimation } from "../../animations/headerAnimation";

// import header1 from "../../images/header1.jpg";
// import header2 from "../../images/header2.jpg";
import header3 from "../../images/header3.jpg";

const Container = styled.header`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Template = styled.div`
  position: relative;
  top: 0;
  left: 0;
  will-change: transform;
  background-image: url(${header3});
  height: 64vw;
  max-height: 650px;
  background-position: center;
  background-size: cover;
  @media only screen and (orientation: landscape) {
    height: 45vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 460px;
  }
  @media only screen and (min-width: 1375px) {
    height: 650px;
  }
  &.template--office,
  &.template--motto {
    position: absolute;
    height: 64vw;
    max-height: 650px;
    width: 100%;

    @media only screen and (orientation: landscape) {
      height: 45vw;
      background-position: 0% 30%;
    }
    @media only screen and (min-width: 768px) {
      background-position: 0% 30%;
    }
    @media only screen and (min-width: 1024px) {
      height: 460px;
    }
    @media only screen and (min-width: 1375px) {
      height: 650px;
    }
  }
  &.template--motto {
    background-image: url(${header3});
    h1 {
      width: 100%;
    }
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
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
  h1 {
    color: white;
    text-align: center;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 300;
    font-size: 28px;
    line-height: 1.1;
    letter-spacing: 2px;
    @media only screen and (min-width: 768px) {
      font-size: 40px;
    }
    span {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 12px;
      letter-spacing: 8px;
      @media only screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const headers = [
  // { id: "office", title: "jesień 2019", span: "office", image: header2 },
  {
    id: "casual",
    title: "find your own style",
    span: "",
    image: header3
  }
  // { id: "casual", title: "jesień 2019", span: "casual", image: header1 }
];

const Header = () => {
  useEffect(() => {
    // headerAnimation();
  });
  const headersLayouts = headers.map(header => (
    <Template key={header.id} className={`template--${header.id}`}>
      <h1>
        {header.title}
        <br />
        <span>{header.span}</span>
      </h1>
    </Template>
  ));

  return <Container>{headersLayouts}</Container>;
};

export default Header;
