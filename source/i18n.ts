import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../_i18next/ru';
import en from '../_i18next/en';

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources: {
    ru,
    en,
  },
});

export default i18n;
