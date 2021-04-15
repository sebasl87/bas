import React from "react";
import "./menu.scss";
import home from "../../../assets/icons/homed.png";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container border rounded border-primary menu d-flex justify-content-center m-auto">
      <Link smooth to="/#" className="m-auto fz21">
        <img src={home} alt="Home" className="home" />
      </Link>
      <Link smooth to="/#contacto" className="m-auto fz21">
        {t('menu.rva')}
      </Link>
      <Link smooth to="/#servicios" className="m-auto fz21">
      {t('menu.serv')}
      </Link>
      <Link smooth to="/#galeria" className="m-auto fz21">
      {t('menu.gal')}
      </Link>
      <Link smooth to="/#ubicacion" className="m-auto fz21">
      {t('menu.ubi')}
      </Link>
      <Link smooth to="/#contacto" className="m-auto fz21">
      {t('menu.ctc')}
      </Link>
    </div>
  );
}
