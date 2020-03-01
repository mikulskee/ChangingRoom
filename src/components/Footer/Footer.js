import React from "react";
import styled from "styled-components";
import logoWhite from "../../images/logo-main-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import logoUE from "../../images/logo-ue.png";
import logoFE from "../../images/logo-fe.png";
import logoSilesia from "../../images/logo-silesia.png";

const Container = styled.footer`
  padding: 20px 0 5px;
  width: 100%;

  background-color: #000;
  img.logo-footer {
    display: block;
    width: 60%;
    max-width: 248px;
    margin: 0 auto;
    @media only screen and (orientation: landscape) {
      width: 30%;
    }
    @media only screen and (min-width: 768px) {
      width: 35%;
    }
    @media only screen and (min-width: 1024px) {
      width: 20%;
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
  div.funds {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 0 auto 20px;
    align-items: center;
    justify-content: center;
    @media only screen and (orientation: portrait) {
      flex-direction: column;
    }

    img {
      padding: 0 20px;
      display: block;
      height: 45px;
      @media only screen and (min-width: 1024px) {
        height: 55px;
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
      <img
        src={logoWhite}
        alt="białe logo przebieralnia"
        className="logo-footer"
      />
      <div className="socials">
        <a href="https://www.facebook.com/eprzebieralnia/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
      <div className="funds">
        <img src={logoUE} alt="" className="ue" />
        <img src={logoFE} alt="" className="ue" />
        <img src={logoSilesia} alt="" className="ue" />
      </div>
      <p>
        © 2019 coded with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a href="https://codeverse.pl">Codeverse.pl</a> . All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
