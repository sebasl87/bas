import React from "react";
import img2 from "../assets/img/2.jpg";
import Galery from "./Components/Galery/Galery";
import Goldtext from "./Components/GoldenText/Goldtext";
import Servicios from "./Components/Servicios/Servicios";
import "./index.scss";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="w-90 text-center m-auto">
          <img src={img2} alt="Logo BienAlSur" className="slider" />
          <Goldtext/>
          <Servicios/>
          <Galery/>
        </div>
      </div>
    </>
  );
};

export default Body;
