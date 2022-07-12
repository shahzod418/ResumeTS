import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../_i18next/ru';
import en from '../_i18next/en';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    ru,
    en,
  },
});

export default i18n;
