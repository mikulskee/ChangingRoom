import React, { useEffect } from "react";
import styled from "styled-components";
import contactImage from "../../images/contact-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
  width: 100%;
  position: relative;
  background-image: url(${contactImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 30px 0;
  .wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    padding: 40px 0 30px;
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
    &.small {
      padding: 20px 0 20px;
      font-size: 14px;
      ::after {
        width: 40%;
      }

      @media only screen and (min-width: 768px) {
        font-size: 24px;
      }
    }
    ::after {
      content: "";
      display: block;
      width: 60%;
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
  width: 80%;
  height: 60%;
  max-width: 840px;
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
  margin: 0 auto;

  a {
    padding: 40px 0 30px;
    font-family: "Source Sans Pro", sans-serif;
    display: block;
    color: white;
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 22px;
    }
    ::after {
      content: "";
      display: block;
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

const Wrapper = styled.div`
  width: 100%;

  @media only screen and (orientation: landscape) {
    width: 60%;
    margin: 0 auto;
  }
`;

const Contact = () => {
  useEffect(() => {
    const googleMaps = document.querySelector(".google-maps");
    googleMaps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.5549934003966!2d18.984353116055598!3d50.26289510874189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce7323bec4e5%3A0x3691841cf2ffcd5e!2sBoche%C5%84skiego%2069%2C%2040-859%20Katowice!5e0!3m2!1spl!2spl!4v1571784505033!5m2!1spl!2spl"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>`;
  });

  return (
    <Container>
      <div className="wrapper">
        <h3>Zapraszamy do naszego sklepu stacjonarnego</h3>
        <ContactInfo>
          <a href="tel:+48664242650">
            <FontAwesomeIcon icon={faPhone} /> +48 664-242-650
          </a>
          <a href="mailto:kontakt@e-przebieralnia.com">
            <FontAwesomeIcon icon={faEnvelope} /> kontakt@e-przebieralnia.pl
          </a>
        </ContactInfo>
        <Wrapper>
          <h3 className="small">
            C.H. Załęże ul. Bocheńskiego 69 <br /> Lokal nr 55
          </h3>
          <GoogleMaps className="google-maps" />
        </Wrapper>
      </div>
    </Container>
  );
};

export default Contact;
