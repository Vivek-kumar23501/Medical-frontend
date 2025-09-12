import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import ur from "./locales/ur/translation.json";

i18n
  .use(initReactI18next) // react ke sath integrate karne ke liye
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ur: { translation: ur },
    },
    lng: "en", // default language
    fallbackLng: "en", // agar translation na mile toh English dikhayega
    interpolation: { escapeValue: false },
  });

export default i18n;
