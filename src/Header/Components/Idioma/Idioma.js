import React from "react";
import "./idioma.scss";
import arg from "../../../assets/img/arg.jpg";
import ing from "../../../assets/img/ing.jpg";
import por from "../../../assets/img/por.jpg";

export default function Idioma() {
  return (
    <div className="banderas">
      <div className="dropdown">
        <button type="button" className="btn dropdown p-0" data-toggle="dropdown">
          <img src={arg} alt="Argentino" />
        </button>
        <div className="dropdown-menu p-0" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            <img src={ing} alt="Ingles" />
          </button>
          <button className="dropdown-item" type="button">
            <img src={por} alt="Brasilero" />
          </button>
        </div>
      </div>
    </div>
  );
}
