import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    debug: __IS_DEV__,
    ns: [], // TODO: will be changed to default .json file with common phrase?

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export {i18n};
