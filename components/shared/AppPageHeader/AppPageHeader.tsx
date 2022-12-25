import React from 'react';
import {NextPage} from 'next';
import {SPageHeader} from './SAppPageHeader.styled';
import ToggleTheme from '@components/diff/ToggleTheme';
import AppLanguageSwitcher from '@components/diff/AppLanguageSwitcher';

const AppPageHeader: NextPage = () => {
   return (
      <SPageHeader isBold="true">
         <ToggleTheme />
         <AppLanguageSwitcher />
         PageHeader component across all pages
      </SPageHeader>
   );
};

export default AppPageHeader;
