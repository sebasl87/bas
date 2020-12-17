import React from "react";
import img2 from "../assets/img/2.jpg";
import Galery from "./Components/Galery/Galery";
import Goldtext from "./Components/GoldenText/Goldtext";
import Services from "./Components/Services/Services";
import Location from "./Components/Location/Location";
import Contact from "./Components/Contact/Contact";

import "./index.scss";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="w-90 text-center m-auto">
          <img src={img2} alt="Logo BienAlSur" className="slider" />
          <Goldtext />
          <Services />
          <Galery />
          <Location />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Body;
