import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";

const Button = styled.button`
  background: none;
  border: none;
  padding: 15px 16px;
  div {
    position: relative;
    width: 16px;
    height: 2px;
    background-color: black;

    ::before,
    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 16px;
      height: 2px;
      background-color: black;
      top: -200%;
    }
    ::after {
      top: 200%;
    }
  }
`;

const Burger = () => {
  const handleBurger = () => {
    const menu = document.querySelector(".menu");
    TweenMax.set(menu, { css: { display: "flex" } });
    TweenMax.to(menu, 0.25, { css: { transform: "translatex(0)" } });
  };

  return (
    <Button onClick={handleBurger}>
      <div />
    </Button>
  );
};

export default Burger;
