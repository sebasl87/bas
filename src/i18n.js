import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";

const allowedLanguages = ["en", "es", "po"];

const defaultLng = "es";
let lng = defaultLng;

const storageLanguage = localStorage.getItem("language");

if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "../locales/{{lng}}.json",
      allowMultiLoading: true,
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;
