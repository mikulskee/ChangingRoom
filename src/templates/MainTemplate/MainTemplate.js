import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const MainTemplate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </>
  );
};

export default MainTemplate;
