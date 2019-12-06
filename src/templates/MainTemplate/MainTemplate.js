import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Wrapper = styled.div``;

const MainTemplate = () => {
  return (
    <Wrapper className={"main-template"}>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
