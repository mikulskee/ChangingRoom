import React, { Component } from "react";
import styled from "styled-components";
import additives from "../../images/additives.jpg";
import hoodies from "../../images/hoodies.jpg";
import jackets from "../../images/jackets.jpg";
import pants from "../../images/pants.jpg";
import shirts from "../../images/shirts.jpg";
import bags from "../../images/bags.jpg";
import skirts from "../../images/skirts.jpg";
import tshirts from "../../images/t-shirts.jpg";
import Line from "../Line/Line";
import { Link } from "react-router-dom";

const Container = styled.main`
  background-color: white;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;

  @media only screen and (min-width: 1024px) {
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1400px) {
    width: 1100px;
  }

  .product {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: black;

    :hover h1::after {
      transform: translate(-50%, 5px) scale(1);
    }
    :hover img {
      filter: blur(2px);
    }

    @media only screen and (min-width: 1024px) {
      width: 50%;
      border-bottom: 2px solid #171717;
    }

    img {
      width: 50%;
      transition: filter 0.15s linear;
    }

    h1 {
      position: relative;
      width: 50vw;
      text-align: center;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 12px;
      letter-spacing: 0.5em;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        width: 60%;
        height: 2px;
        background-color: black;
        transition: transform 0.15s linear;
        transform: translate(-50%, 5px) scale(0);
      }
      @media only screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .product:nth-child(odd) {
    flex-direction: row-reverse;
    @media only screen and (min-width: 1024px) {
      align-self: flex-end;
    }
  }
`;

const sections = [
  { product: "T-shirty", image: tshirts, id: "tshirts" },
  { product: "Koszule & Bluzki", image: shirts, id: "shirts" },
  { product: "Spodnie", image: pants, id: "pants" },
  { product: "Bluzy", image: hoodies, id: "hoodies" },
  { product: "Sukienki & Spódnice", image: skirts, id: "skirts" },
  { product: "Kurtki & Marynarki", image: jackets, id: "jackets" },
  { product: "Torebki", image: bags, id: "bags" },
  { product: "Dodatki", image: additives, id: "additives" }
];

class Main extends Component {
  state = {};
  render() {
    const products = sections.map(section => (
      <Link
        to={section.id}
        key={section.id}
        className={`product ${section.id}`}
      >
        <img alt={section.product} src={section.image} />
        <h1>{section.product}</h1>
      </Link>
    ));

    return (
      <Container>
        <Line />
        {products}
      </Container>
    );
  }
}

export default Main;
