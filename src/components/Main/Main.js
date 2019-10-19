import React, { Component } from "react";
import styled from "styled-components";
import additives from "../../images/additives.jpg";
import hoodies from "../../images/hoodies.jpg";
import jackets from "../../images/jackets.jpg";
import pants from "../../images/pants.jpg";
import shirts from "../../images/shirts.jpg";
import shoes from "../../images/shoes.jpg";
import skirts from "../../images/skirts.jpg";
import tshirts from "../../images/t-shirts.jpg";

const Container = styled.main`
  background-color: white;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  .product {
    width: 100%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 1024px) {
      width: 50%;
      border-bottom: 2px solid #171717;
    }

    img {
      width: 50%;
    }

    h1 {
      width: 50vw;
      text-align: center;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 12px;
      letter-spacing: 0.5em;
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
  { product: "Buty", image: shoes, id: "shoes" },
  { product: "Dodatki", image: additives, id: "additives" }
];

class Main extends Component {
  state = {};
  render() {
    const products = sections.map(section => (
      <div key={section.id} className={`product ${section.id}`}>
        <img alt={section.product} src={section.image} />
        <h1>{section.product}</h1>
      </div>
    ));

    return <Container>{products} </Container>;
  }
}

export default Main;
