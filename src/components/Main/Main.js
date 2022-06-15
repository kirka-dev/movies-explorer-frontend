import React from "react";
import Promo from "./components/Promo/Promo";
import AboutProject from "./components/AboutProject/AboutProject";
import Techs from "./components/Techs/Techs";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
