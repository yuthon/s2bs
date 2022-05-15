import { FC, createContext, useState, ReactElement } from "react";
import { dictionaryList } from "./languages";

interface LanguageContextType {
  userLanguage: string;
  dictionary: any;
  setUserLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface LanguageProviderProps {
  children: ReactElement
}

// デフォルトの言語を元に言語のコンテキストを作る
export const LanguageContext = createContext<LanguageContextType>(null!);

const LanguageProvider: FC<LanguageProviderProps> = ({ children }): ReactElement => {
  let defaultLanguage: string;

  if (window.navigator.language.indexOf("ja") > -1) {
    defaultLanguage = "ja";
  } else {
    defaultLanguage = 'en';
  }
  
  const [userLanguage, setUserLanguage] = useState<string>(defaultLanguage);

  let dictionary = dictionaryList[userLanguage];

  const provider = {
    userLanguage,
    dictionary,
    setUserLanguage,
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;