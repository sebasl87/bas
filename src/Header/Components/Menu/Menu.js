import React from "react";
import "./menu.scss";
import home from "../../../assets/icons/homed.png";
export default function Menu() {
  return (
    <div className="container border rounded border-primary menu d-flex justify-content-center m-auto">
      <span className="m-auto fz21">
        <img src={home} alt="Home" className="home"/>
      </span>
      <span className="m-auto fz21">Reservas</span>
      <span className="m-auto fz21">Servicios</span>
      <span className="m-auto fz21">Galería</span>
      <span className="m-auto fz21">Ubicación</span>
      <span className="m-auto fz21">Contacto</span>
    </div>
  );
}
