'use client';

import React from 'react';
import {NextPage} from 'next';
import {SAppLinkButton, SAppLinkButtonText} from './SAppLinkButton.styled';
import {AppLinkButtonProps} from './AppLinkButton.types';
import RightArrow from '@assets/icons/RightArrow';

const AppLinkButton: NextPage<AppLinkButtonProps> = ({
   href,
   text,
   hasArrow,
   underline,
   size,
}) => {
   return (
      <SAppLinkButton href={href}>
         <SAppLinkButtonText size={size} underline={underline}>
            {text}
         </SAppLinkButtonText>
         {hasArrow && <RightArrow />}
      </SAppLinkButton>
   );
};

export default AppLinkButton;
