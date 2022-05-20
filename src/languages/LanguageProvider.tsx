import { FC, createContext, useState, ReactElement } from "react";
import { dictionaryList } from "./languages";

interface LanguageContextType {
  userLanguage: string;
  dictionary: any;
  setUserLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface LanguageProviderProps {
  children: ReactElement;
}

// デフォルトの言語を元に言語のコンテキストを作る
export const LanguageContext = createContext<LanguageContextType>(null!);

const LanguageProvider: FC<LanguageProviderProps> = ({ children }): ReactElement => {
  // 言語
  let defaultLanguage: string;
  // ブラウザから言語を取得。日本語でなければ英語にする
  if (window.navigator.language.includes("ja")) {
    defaultLanguage = "ja";
  } else {
    defaultLanguage = 'en';
  }
  // 言語情報を管理
  const [userLanguage, setUserLanguage] = useState<string>(defaultLanguage);
  // 指定された言語のテキスト情報
  let dictionary: {[key: string]: string} = dictionaryList[userLanguage];

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