'use client';

import React from 'react';
import {NextPage} from 'next';
import {SPageHeader} from './SAppPageHeader.styled';
import {IAppPageHeaderProps} from './AppPageHeader.types';
import LanguageSwitcher from '@components/diff/LanguageSwitcher';
import ToggleTheme from '@components/diff/ToggleTheme';

const AppPageHeader: NextPage<IAppPageHeaderProps> = ({title, path = '/'}) => {
   return (
      <SPageHeader isBold="true">
         <ToggleTheme />
         <LanguageSwitcher path={path} />
         PageHeader component across all pagess {title}
      </SPageHeader>
   );
};

export default AppPageHeader;
