import React, { Component } from "react";
import styled from "styled-components";
import contactImage from "../../images/contact-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
  width: 100%;
  position: relative;
  background-image: url(${contactImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 0;
  .wrapper {
    position: relative;
    z-index: 1;
  }

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(106, 106, 106, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    opacity: 0.45;
  }

  h3 {
    color: white;
    width: 80%;
    font-family: "Source Sans Pro", sans-serif;
    padding: 40px 0 60px;
    text-align: center;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
    ::after {
      content: "";
      display: block;
      width: 80%;
      height: 2px;
      background-color: #fff;
      position: relative;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const GoogleMaps = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 80vw;
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    height: 20vw;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;
const ContactInfo = styled.div`
  width: 80vw;
  margin: 0 auto;
  a {
    padding: 40px 0 30px 30px;
    font-family: "Source Sans Pro", sans-serif;
    display: block;
    color: white;
    text-decoration: none;
    font-size: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 22px;
    }
    ::after {
      content: "";
      display: block;
      width: 90%;
      height: 2px;
      background-color: #fff;
      position: relative;
      top: 8px;
    }
  }
  a:nth-child(2) {
    padding: 0 0 40px 30px;
  }
`;

class Contact extends Component {
  componentDidMount() {
    const googleMaps = document.querySelector(".google-maps");
    googleMaps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.5549934003966!2d18.984353116055598!3d50.26289510874189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce7323bec4e5%3A0x3691841cf2ffcd5e!2sBoche%C5%84skiego%2069%2C%2040-859%20Katowice!5e0!3m2!1spl!2spl!4v1571784505033!5m2!1spl!2spl"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>`;
  }
  render() {
    return (
      <Container>
        <div className="wrapper">
          <h3>
            C.H. Załęże ul. Bocheńskiego 69 <br /> Lokal nr 55
          </h3>
          <GoogleMaps className="google-maps" />
          <ContactInfo>
            <a href="tel:+48664242650">
              <FontAwesomeIcon icon={faPhone} />
              +48 664-242-650
            </a>
          </ContactInfo>
        </div>
      </Container>
    );
  }
}

export default Contact;
