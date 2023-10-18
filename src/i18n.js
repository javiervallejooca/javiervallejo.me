import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/es.json";
import translationEN from "./locales/en/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: { ...translationEN },
    },
    es: {
      translation: { ...translationES },
    },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
