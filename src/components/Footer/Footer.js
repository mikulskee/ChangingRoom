import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Container = styled.footer`
  padding: 20px 0 5px;
  width: 100%;

  background-color: #000;
  img {
    display: block;
    width: 60%;
    max-width: 340px;
    margin: 0 auto;
    @media only screen and (orientation: landscape) {
      width: 35%;
    }
    @media only screen and (min-width: 768px) {
      width: 40%;
    }
    @media only screen and (min-width: 1024px) {
      width: 25%;
    }
  }

  div.socials {
    text-align: center;
    padding: 20px 0;
    a {
      text-decoration: none;
      color: white;
      padding: 10px 15px;
      font-size: 18px;
      @media only screen and (min-width: 768px) {
        font-size: 22px;
      }
    }
  }

  p {
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 6px;
    text-align: center;
    letter-spacing: 1px;
    @media only screen and (min-width: 768px) {
      font-size: 10px;
    }
    a {
      color: white;
    }
    svg {
      path {
        fill: red;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="białe logo przebieralnia" />
      <div className="socials">
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
      <p>
        © 2019 coded with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a href="https://codeverse.pl">Codeverse.pl</a> . All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;