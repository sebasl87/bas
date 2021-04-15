import React from "react";
import "./location.scss";
import position from "../../../assets/icons/position.png";
import Map from "./Map/Map";
import { useTranslation } from "react-i18next";

function Location() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="mx-auto mb-4" id="ubicacion">
        <div className="fz30 text-center centrado">
          Ubicación{" "}
          <img src={position} alt="Internet" className="imgLoc ml-2" />
        </div>
      </div>
      <div>
        <div className="fz20 text-center">{t("ubicacion")}</div>
      </div>
      <div className="mx-auto mt-4">
        <Map />
      </div>
      <hr />
    </>
  );
}

export default Location;
