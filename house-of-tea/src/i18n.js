
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './languages/en/translation.json';
import translationAR from './languages/ar/translation.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    lng: savedLanguage, 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
