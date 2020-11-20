import React from "react";
import "./menu.scss";
import home from "../../../assets/img/homed.png";
export default function Menu() {
  return (
    <div className="container border rounded border-primary menu d-flex justify-content-center m-auto">
      <span className="m-auto fz23">
        <img src={home} alt="Home" className="home"/>
      </span>
      <span className="m-auto fz23">Reservas</span>
      <span className="m-auto fz23">Servicios</span>
      <span className="m-auto fz23">Galería</span>
      <span className="m-auto fz23">Ubicación</span>
      <span className="m-auto fz23">Contacto</span>
    </div>
  );
}
