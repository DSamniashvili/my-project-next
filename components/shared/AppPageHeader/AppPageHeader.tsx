'use client';

import React, {FC} from 'react';
import {SPageHeader} from './SAppPageHeader.styled';
import {IAppPageHeaderProps} from './AppPageHeader.types';
import AppLanguageSwitcher from '@components/diff/AppLanguageSwitcher';
import ToggleTheme from '@components/diff/ToggleTheme';
import { useLanguageSwitcherContext } from '@contexts/index';

const AppPageHeader: FC<IAppPageHeaderProps> = ({title, path = '/'}) => {
   const {
      currentLanguage,
      toggleLanguageSwitcherModal,
      languageSwitcherModalOpen,
   } = useLanguageSwitcherContext();

   const toggleModal = () => {
      toggleLanguageSwitcherModal(!languageSwitcherModalOpen);
   };

   return (
      <>
         <AppLanguageSwitcher path={path} />
         <SPageHeader isBold="true">
            <ToggleTheme />{' '}
            <button onClick={toggleModal}>{currentLanguage}</button>
         </SPageHeader>
      </>
   );
};

export default AppPageHeader;
