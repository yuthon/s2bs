import { useContext, FC } from 'react';
import { LanguageContext } from "./LanguageProvider";

interface TextProps {
  tid: string;
}

export const Text: FC<TextProps> = ( {tid} ) => {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid
}