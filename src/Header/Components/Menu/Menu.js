import React from "react";
import "./menu.scss";
export default function Menu() {
  return (
    <div className="container border rounded border-primary menu d-flex justify-content-center m-auto">
        <span className="m-auto">Casita</span>
        <span className="m-auto">Reservas</span>
        <span className="m-auto">Galería</span>
        <span className="m-auto">Ubicación</span>
        <span className="m-auto">Contacto</span>
    </div>
  );
}
