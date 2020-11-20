import React from "react";
import logo from "../assets/img/logo.png";
import Idioma from "./Components/Idioma/Idioma";
import Menu from "./Components/Menu/Menu";
import "./index.scss";

const Header = () => {
  return (
    <div className="fixed">
      <div className="w-100 text-center">
        <img src={logo} alt="Logo BienAlSur" className="logo" />
      </div>
      <Idioma />
      <Menu />
    </div>
  );
};

export default Header;
