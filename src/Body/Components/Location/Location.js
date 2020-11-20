import React from "react";
import "./location.scss";
import position from "../../../assets/img/position.png";
import Map from "./Map/Map";

function Location() {
  return (
    <>
      <div className="mx-auto mb-4">
        <text className="fz40 text-center">
          Ubicación <img src={position} alt="Internet" className="imgLoc" />
        </text>
      </div>
      <div>
        <text className="fz30 text-center">
          Está ubicado muy próximo al centro de la ciudad, a pie sin pendiente y
          a cuatro cuadras de la Bahía de Ushuaia. Se encuentra a pocos metros
          de un supermercado grande, con cajero automático y a cuatro cuadras de
          una estación de servicio.
        </text>
      </div>
      <div className="mx-auto mt-4">
        <Map />
      </div>
      <hr />
    </>
  );
}

export default Location;
