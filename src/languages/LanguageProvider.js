import { createContext, useState } from "react";
import { languageOptions, dictionaryList } from "./languages";

// デフォルトの言語を元に言語のコンテキストを作る
export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en
});

// 
export function LanguageProvider({ children }) {
  let defaultLanguage;
  if (window.navigator.language.indexOf("en") > -1) {
    defaultLanguage = "en";
  } else if (window.navigator.language.indexOf("ja") > -1) {
    defaultLanguage = "ja";
  };
  console.log(defaultLanguage)
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage)
    }
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

