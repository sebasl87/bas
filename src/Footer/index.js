import React from "react";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-primary text-white">
        <div className="w-100 text-center clearfix px-5">
          <div className="float-left">
            <span>12 de Octubre 305 3° - Ushuaia (V9410)</span>
            <br />
            <span>Tierra del Fuego. 0054 (911) 5614.0957</span>
          </div>
          <div className="float-right" style={{lineHeight: 3}}>info@bienalsurapartamentos.com.ar</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
