import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  height: 100%;
  width: 17%;
  background-image: url(${({ bg }) => (bg ? bg : null)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  margin-right: 50px;
  z-index: -1;
  @media only screen and (min-width: 1024px) {
    display: block;
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #171717;
    opacity: 0.35;
  }
`;
const TitleBanner = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 30px;
  transform: translate(-50%, -50%);
`;
const ProductBanner = props => {
  const { shopItems } = useContext(ShopContext);

  const bgBanner = shopItems.filter(
    section => section.section === props.match.params.section_id
  )[0].mainImg;

  const title = shopItems.filter(
    section => section.section === props.match.params.section_id
  )[0].sectionPL;

  return (
    <Wrapper bg={bgBanner}>
      <TitleBanner>{title}</TitleBanner>
    </Wrapper>
  );
};

export default withRouter(ProductBanner);
