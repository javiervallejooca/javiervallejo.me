import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import aboutEN from './locales/en/about.json';
import footerEN from './locales/en/footer.json';
import homeEN from './locales/en/home.json';

import aboutES from './locales/es/about.json';
import footerES from './locales/es/footer.json';
import homeES from './locales/es/home.json';

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    resources: {
      en: {
        translation: { ...aboutEN, ...footerEN, ...homeEN },
      },
      es: {
        translation: { ...aboutES, ...footerES, ...homeES },
      },
    },
    lng: 'es', // default language
    fallbackLng: 'en', // backup language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
