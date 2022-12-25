'use client';

import React from 'react';
import {NextPage} from 'next';
import {SPageHeader} from './SAppPageHeader.styled';
import {IAppPageHeaderProps} from './AppPageHeader.types';
import ToggleTheme from '@components/diff/ToggleTheme';
import AppLanguageSwitcher from '@components/diff/AppLanguageSwitcher';
import {useTranslation} from 'next-i18next';

const AppPageHeader: NextPage<IAppPageHeaderProps> = ({title}) => {
   const {t} = useTranslation();
   return (
      <SPageHeader isBold="true">
         <ToggleTheme />
         <AppLanguageSwitcher />
         PageHeader component across all pagess {t(`${title}`)}
      </SPageHeader>
   );
};

export default AppPageHeader;
