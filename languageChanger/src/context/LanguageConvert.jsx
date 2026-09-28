import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageConvert = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
// console.log(i18n)
// console.log(i18n.language)
  const language = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageConvert.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageConvert.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageConvert);
};