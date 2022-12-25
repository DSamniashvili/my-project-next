import {createContext, useContext} from 'react';

interface ILanguageSwitcherContext {
   currentLanguage: string;
   changeCurrentLanguage: (lang: string) => void;
   languageSwitcherModalOpen: boolean;
   toggleLanguageSwitcherModal: (isOpen: boolean) => void;
}

const LanguageSwitcherContext = createContext<ILanguageSwitcherContext>(
   {} as ILanguageSwitcherContext,
);

export default LanguageSwitcherContext;

export const useLanguageSwitcherContext = () =>
   useContext(LanguageSwitcherContext);
