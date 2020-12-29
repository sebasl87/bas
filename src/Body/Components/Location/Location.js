import React from "react";
import "./location.scss";
import position from "../../../assets/icons/position.png";
import Map from "./Map/Map";

function Location() {
  return (
    <>
      <div className="mx-auto mb-4" id="ubicacion">
        <div className="fz30 text-center centrado">
          Ubicación <img src={position} alt="Internet" className="imgLoc ml-2" />
        </div>
      </div>
      <div>
        <div className="fz20 text-center">
          Está ubicado muy próximo al centro de la ciudad, a pie sin pendiente y
          a cuatro cuadras de la Bahía de Ushuaia. Se encuentra a pocos metros
          de un supermercado grande, con cajero automático y a cuatro cuadras de
          una estación de servicio.
        </div>
      </div>
      <div className="mx-auto mt-4">
        <Map />
      </div>
      <hr />
    </>
  );
}

export default Location;
