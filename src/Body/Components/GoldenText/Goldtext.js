import React from "react";
import "./goldentext.scss";

function Goldtext() {
  return (
    <div>
      <hr />
      <text
        style={{ fontFamily: "Rage" }}
        className="text-primary text-center h1"
      >
        Departamento ubicado en el tercer piso del edificio Marinas Tower, con
        amplios ventanales en todos los ambientes con vista hacia la Bahía de
        Ushuaia, Canal Beagle, Monte Olivia y Glaciar Martial.
      </text>
      <hr />
    </div>
  );
}

export default Goldtext;
