import React from "react";
import "./servicios.scss";
import compu from '../../../assets/img/desktop.png'
import shower from '../../../assets/img/shower.png'
import wifi from '../../../assets/img/wifi.png'

function Servicios() {
  return (
    <>
      <div className="mx-auto mb-4">
        <text className="fz40 text-center">Servicios</text>
      </div>
      <div>
        <text className="fz30 text-center">
          Departamento de cuatro ambientes: tres dormitorios (uno en suite con
          vestidor), living- cocina comedor y dos baños. <br /><br /> Cocina
          eléctrica, horno eléctrico, microondas, cafetera y tostadora
          eléctrica, heladera con freezer, smart TV y wifi gratuito. Todas las
          camas son sommiers de alta calidad. El edificio posee terraza, laundry
          y seguridad durante el día.
        </text>
      </div>
      <div className="mx-auto mt-4">
          <img src={compu} alt="Internet" className="imgServ"/>
          <img src={wifi} alt="Wifi" className="imgServ"/>
          <img src={shower} alt="Ducha" className="imgServ"/>
      </div>
      <hr />

    </>
  );
}

export default Servicios;
