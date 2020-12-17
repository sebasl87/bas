import React from "react";
import "./services.scss";
import compu from '../../../assets/icons/desktop.png'
import shower from '../../../assets/icons/shower.png'
import wifi from '../../../assets/icons/wifi.png'

function Servicios() {
  return (
    <>
      <div className="mx-auto mb-4">
        <div className="fz40 text-center">Servicios</div>
      </div>
      <div>
        <div className="fz30 text-center">
          Departamento de cuatro ambientes: tres dormitorios (uno en suite con
          vestidor), living- cocina comedor y dos baños. <br /><br /> Cocina
          eléctrica, horno eléctrico, microondas, cafetera y tostadora
          eléctrica, heladera con freezer, smart TV y wifi gratuito. Todas las
          camas son sommiers de alta calidad. El edificio posee terraza, laundry
          y seguridad durante el día.
        </div>
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
