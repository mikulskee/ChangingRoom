import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  padding: 10px 16px;
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
  return (
    <Button>
      <div />
    </Button>
  );
};

export default Burger;
