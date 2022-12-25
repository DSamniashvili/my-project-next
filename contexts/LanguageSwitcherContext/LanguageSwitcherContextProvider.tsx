import {FC, ReactNode, useState} from 'react';
import LanguageSwitcherContext from './LanguageSwitcherContext';

interface IProps {
   children: ReactNode;
}

const LanguageSwitcherContextProvider: FC<IProps> = ({children}) => {
   const [currentLanguage, setCurrentLanguage] = useState<string>('');
   const [languageSwitcherModalOpen, setLanguageSwitcherModalOpen] =
      useState<boolean>(false);

   const changeCurrentLanguage = (lang: string) => {
      setCurrentLanguage(lang);
   };

   const toggleLanguageSwitcherModal = (isOpen: boolean) => {
      setLanguageSwitcherModalOpen(isOpen);
   };
   return (
      <LanguageSwitcherContext.Provider
         value={{
            currentLanguage,
            changeCurrentLanguage,
            languageSwitcherModalOpen,
            toggleLanguageSwitcherModal,
         }}>
         {children}
      </LanguageSwitcherContext.Provider>
   );
};

LanguageSwitcherContextProvider.displayName = 'Language Switcher context';
export default LanguageSwitcherContextProvider;
