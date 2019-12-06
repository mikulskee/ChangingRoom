import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";

const Wrapper = styled.ul`
  width: 100%;
  margin: 20px 0 0;
  display: none;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
  li {
    margin: 10px 5px;
    a {
      position: relative;
      text-decoration: none;
      color: #222;
      font-family: "Source Sans Pro", sans-serif;
      letter-spacing: 2px;
      font-weight: 300;
      padding: 5px 10px;

      &.active {
        ::after {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: "";
          height: 2px;
          width: 110%;
          background-color: #222;
        }
      }
    }
  }
`;

const DesktopNavigation = () => {
  const { shopItems } = useContext(ShopContext);
  const links = shopItems.map(item => (
    <li key={item.sectionPL}>
      <NavLink exact to={item.link}>
        {item.sectionPL}
      </NavLink>
    </li>
  ));
  return <Wrapper>{links}</Wrapper>;
};

export default DesktopNavigation;
