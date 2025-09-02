import React, { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Load from localStorage if exists, else default to 'en'
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    // Optionally set HTML direction
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
