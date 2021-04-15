import React from "react";
import "./services.scss";
import compu from "../../../assets/icons/desktop.png";
import shower from "../../../assets/icons/shower.png";
import wifi from "../../../assets/icons/wifi.png";
import { useTranslation } from "react-i18next";

function Servicios() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="mx-auto mb-4">
        <div className="fz30 text-center">Servicios</div>
      </div>
      <div>
        <div className="fz20 text-center lh17" id="galeria">
          {t("servicios")}
        </div>
      </div>
      <div className="mx-auto mt-35">
        <img src={compu} alt="Internet" className="imgServ" />
        <img src={wifi} alt="Wifi" className="imgServ" />
        <img src={shower} alt="Ducha" className="imgServ" />
      </div>
      <hr />
    </>
  );
}

export default Servicios;
