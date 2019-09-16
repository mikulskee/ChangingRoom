import React from "react";
import styled from "styled-components";
import logoWhite from "../../images/logo-white.png";
import { TweenMax } from "gsap/TweenMax";

const Wrap = styled.div`
  transform: translateX(-100%);
  width: 100%;
  position: fixed;
  display: none;
  flex-direction: row;
  z-index: 9999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 100vh;
  background-color: #fff;
  &.menu-landscape {
    overflow-y: auto;
  }
`;

const X = styled.div`
  width: 10%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 90%;
    height: 2px;
    background-color: #fff;
    transform: rotate(45deg);
  }
  ::before {
    transform: rotate(-45deg);
  }
`;

const Logo = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #000;
  img {
    display: block;
    height: 9vw;
    margin: 0 auto;
  }
`;

const UL = styled.ul`
  padding-left: 10px;
  a {
    margin: 10px 0;
    padding: 10px 0;
    display: block;
    text-decoration: none;
    color: black;
    font-family: "Source Sans Pro", sans-serif;
    ::after {
      content: "";
      display: block;
      width: 95%;
      height: 2px;
      background-color: #000;
      transform: translateY(10px);
    }
  }
`;

const Others = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  a {
    font-size: 12px;
    margin: 5px 0;
    padding: 10px 0;
    display: block;
    text-decoration: none;
    color: #999;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

const sections = [
  { product: "Przebieralnia.com", id: "home" },
  { product: "T-shirty", id: "tshirts" },
  { product: "Koszule & Bluzki", id: "shirts" },
  { product: "Spodnie", id: "pants" },
  { product: "Bluzy", id: "hoodies" },
  { product: "Sukienki & Spódnice", id: "skirts" },
  { product: "Kurtki & Marynarki", id: "jackets" },
  { product: "Buty", id: "shoes" },
  { product: "Dodatki", id: "additives" }
];

const Menu = () => {
  const list = sections.map(section => (
    <li key={section.id}>
      <a href="/" className={section.id}>
        {section.product}{" "}
      </a>
    </li>
  ));

  const handleClick = () => {
    const menu = document.querySelector(".menu");
    document.body.classList.remove("menu-open");
    if (window.innerWidth > window.innerHeight) {
      menu.firstChild.classList.remove("menu-landscape");
    }
    TweenMax.to(menu, 0.25, { css: { transform: "translatex(-100%)" } });
    TweenMax.set(menu, { css: { display: "none" }, delay: 0.25 });
  };
  return (
    <Wrap className={"menu"}>
      <Container>
        <Logo>
          <img src={logoWhite} alt="Białe logo" />
        </Logo>
        <UL>{list}</UL>
        <Others>
          <a href="/">Kontakt</a>
          <a href="/">Reklamacje</a>
        </Others>
      </Container>
      <X onClick={handleClick}></X>
    </Wrap>
  );
};

export default Menu;
