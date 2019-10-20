import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";

const Button = styled.button`
  background: none;
  border: none;
  padding: 15px 16px;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  div {
    position: relative;
    width: 16px;
    height: 2px;
    background-color: black;
    @media only screen and (min-width: 768px) {
      width: 20px;
    }

    ::before,
    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 16px;
      height: 2px;
      background-color: black;
      top: -200%;
      @media only screen and (min-width: 768px) {
        width: 20px;
      }
    }
    ::after {
      top: 200%;
    }
  }
`;

const Burger = () => {
  const handleBurger = () => {
    const menu = document.querySelector(".menu");
    document.body.classList.add("menu-open");
    if (window.innerWidth > window.innerHeight) {
      menu.firstChild.classList.add("menu-landscape");
    }

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
