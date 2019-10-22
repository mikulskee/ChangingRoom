import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;

  .cover {
    height: 70%;
    width: 100%;
    display: block;
    background-image: url(${({ bg }) => (bg ? bg : null)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .description {
    margin-top: 10px;
    margin-left: 5px;
    font-weight: 800;
    font-style: italic;
    font-size: 8px;
  }

  .price {
    font-weight: 800;
    margin-left: 5px;
  }

  .buttons {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    button {
      background-color: #171717;
      color: white;
      font-size: 16px;
      border: none;
      padding: 5px 10px;
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.1s linear, color 0.1s linear;
      svg {
        pointer-events: none;
      }
      &.disabled,
      &.disabled:hover {
        opacity: 0.2;
        pointer-events: none;
        background-color: #171717;
        color: white;
      }
      &:focus {
        outline: none;
      }
      &.active,
      &.fav.active:hover {
        color: #ee5858;
        background-color: #fff;
      }
      &.add:hover,
      &.fav:hover {
        background-color: #aaa;
        color: #171717;
      }
    }
  }
`;

const Product = props => {
  return <Wrapper bg={props.bg}>{props.children}</Wrapper>;
};

export default Product;
