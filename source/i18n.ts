import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from "./assets/texts/locales/ru";
import en from './assets/texts/locales/en';

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources: {
    ru,
    en,
  },
});

export default i18n;
