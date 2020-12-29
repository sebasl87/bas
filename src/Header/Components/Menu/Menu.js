import React from "react";
import "./menu.scss";
import home from "../../../assets/icons/homed.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Menu() {
  return (
    <div className="container border rounded border-primary menu d-flex justify-content-center m-auto">
      <Link smooth to="/#" className="m-auto fz21">
        <img src={home} alt="Home" className="home" />
      </Link>
      <Link smooth to="/#contacto" className="m-auto fz21">
        Reservas
      </Link>
      <Link smooth to="/#servicios" className="m-auto fz21">
        Servicios
      </Link>
      <Link smooth to="/#galeria" className="m-auto fz21">
        Galería
      </Link>
      <Link smooth to="/#ubicacion" className="m-auto fz21">
        Ubicación
      </Link>
      <Link smooth to="/#contacto" className="m-auto fz21">
        Contacto
      </Link>
    </div>
  );
}
