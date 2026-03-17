import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation }
};

const supportedLanguages = ['en', 'hi'];
const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('appLanguage') : null;
const browserLanguage = typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : null;
const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('appLanguage', language);
    document.documentElement.lang = language;
  }
});

export default i18n;
