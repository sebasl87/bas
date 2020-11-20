import React from "react";
import "./idioma.scss";
import arg from "../../../assets/img/arg.jpg";
import ing from "../../../assets/img/ing.jpg";
import por from "../../../assets/img/por.jpg";

export default function Idioma() {
  return (
    <div className="banderas">
      <div class="dropdown">
        <button type="button" class="btn dropdown p-0" data-toggle="dropdown">
          <img src={arg} alt="Argentino" />
        </button>
        <div class="dropdown-menu p-0" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            <img src={ing} alt="Ingles" />
          </button>
          <button class="dropdown-item" type="button">
            <img src={por} alt="Brasilero" />
          </button>
        </div>
      </div>
    </div>
  );
}
