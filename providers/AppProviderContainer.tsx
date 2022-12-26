import LanguageSwitcherContextProvider from '@contexts/LanguageSwitcherContext/LanguageSwitcherContextProvider';
import ModalContextProvider from '@contexts/ModalContext/ModalContextProvider';
import {ThemeProvider} from 'next-themes';
import React, {ReactNode} from 'react';

export const AppProviderContainer = ({children}: {children: ReactNode}) => {
   return (
      <ThemeProvider>
         <ModalContextProvider>
            <LanguageSwitcherContextProvider>
               {children}
            </LanguageSwitcherContextProvider>
         </ModalContextProvider>
      </ThemeProvider>
   );
};
