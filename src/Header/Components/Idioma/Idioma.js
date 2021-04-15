import React from "react";
import "./idioma.scss";
import arg from "../../../assets/img/arg.jpg";
import ing from "../../../assets/img/ing.jpg";
import por from "../../../assets/img/por.jpg";

export default function Idioma() {

  const changeLanguage = (code) => {
    localStorage.setItem("language", code);
    window.location.reload();
  };

  return (
    <div className="banderas">
      <button className="btn p-0" onClick={() => changeLanguage("es")}>
        <img src={arg} alt="Argentino" />
      </button>
      <button className="btn p-0" onClick={() => changeLanguage("en")}>
        <img src={ing} alt="Ingles" />
      </button>
      <button className="btn p-0" onClick={() => changeLanguage("po")}>
        <img src={por} alt="Brasilero" />
      </button>
    </div>
  );
}
