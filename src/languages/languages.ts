import ja from './ja.json';
import en from './en.json';

interface DictionaryListType {
  [key:string]: {[key: string]: string};
}

export const dictionaryList: DictionaryListType = { en, ja };

export const languageOptions = { en: "English", ja: "日本語" };