import React from "react";
import logo from "../assets/img/logo.png";
import Idioma from "./Components/Idioma/Idioma";
import Menu from "./Components/Menu/Menu";
import "./index.scss";

const Header = () => {
  return (
    <>
      <div className="w-100 text-center">
        <img src={logo} alt="Logo BienAlSur" className="m-auto logo" />
      </div>
      <Idioma />
      <Menu />
    </>
  );
};

export default Header;
