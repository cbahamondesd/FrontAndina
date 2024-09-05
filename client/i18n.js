import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './src/locales/es/translation.json';
import translationPT from './src/locales/pt/translation.json';

const resources = {
    es: {
        translation: translationES,
    },
    pt: {
        translation: translationPT,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
        escapeValue: false,
        },
    });

export default i18n;
