import React from 'react';
import {NextPage} from 'next';
import {SAppLinkButton, SAppLinkButtonText} from './SAppLinkButton.styled';
import {AppLinkButtonProps} from './AppLinkButton.types';
import RightArrow from '@assets/icons/RightArrow';

const AppLinkButton: NextPage<AppLinkButtonProps> = ({
   href,
   text,
   hasArrow,
   bold,
   underline,
}) => {
   return (
      <SAppLinkButton href={href}>
         <SAppLinkButtonText
            bold={bold}
            underline={underline}
            hasArrow={hasArrow}>
            {text}
            {hasArrow && <RightArrow />}
         </SAppLinkButtonText>
      </SAppLinkButton>
   );
};

export default AppLinkButton;
