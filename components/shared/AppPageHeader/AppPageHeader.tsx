'use client';

import React from 'react';
import {NextPage} from 'next';
import {SPageHeader} from './SAppPageHeader.styled';
import {IAppPageHeaderProps} from './AppPageHeader.types';
import ToggleTheme from '@components/diff/ToggleTheme';
import AppLanguageSwitcher from '@components/diff/AppLanguageSwitcher';

const AppPageHeader: NextPage<IAppPageHeaderProps> = ({title}) => {
   return (
      <SPageHeader isBold="true">
         <ToggleTheme />
         <AppLanguageSwitcher />
         PageHeader component across all pagess {title}
      </SPageHeader>
   );
};

export default AppPageHeader;
