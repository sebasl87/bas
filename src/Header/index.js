import React from "react";
import logo from "../assets/img/logo.png";
import Idioma from "./Components/Idioma/Idioma";
import Menu from "./Components/Menu/Menu";
import Motor from "./Components/Motor/motor";
import "./index.scss";

const Header = () => {
  return (
    <div className="fixed">
      <div className="w-100 text-center">
        <img src={logo} alt="Logo BienAlSur" className="logo" />
      </div>
      <Idioma />
      <Menu />
      <Motor />
    </div>
  );
};

export default Header;
