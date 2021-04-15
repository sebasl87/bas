import React from "react";
import "./goldentext.scss";
import { useTranslation } from "react-i18next";

function Goldtext() {
  const { t, i18n } = useTranslation();
  return (
    <div id="servicios">
      <hr />
      <div
        style={{ fontFamily: "Rage" }}
        className="text-primary text-center h1"
      >
        {t("golden")}
      </div>
      <hr />
    </div>
  );
}

export default Goldtext;
