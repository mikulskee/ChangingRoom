import React from "react";
import styled from "styled-components";
import logoWhite from "../../images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Container = styled.footer`
  padding: 20px 0 5px;
  width: 100vw;
  background-color: #000;
  img {
    display: block;
    width: 60%;
    margin: 0 auto;
    @media only screen and (orientation: landscape) {
      width: 35%;
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
    }
  }

  p {
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 6px;
    text-align: center;
    letter-spacing: 1px;
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
      <img src={logoWhite} alt="białe logo przebieralnia" />
      <div className="socials">
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
      <p>
        © 2019 coded with <FontAwesomeIcon icon={faHeart} /> by Mateusz Mikulski
        . All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
