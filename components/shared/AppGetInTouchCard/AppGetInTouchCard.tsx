import React from 'react';
import {NextPage} from 'next';
import {
   SAppGetInTouchTitle,
   SAppGetInTouchCard,
   SAppGetInTouchDescription,
} from './SAppGetInTouchCard.styled';
import {AppGetInTouchCardProps} from './AppGetInTouchCard.types';
import AppLinkButton from '../AppLinkButton';
import {useDeviceDetect} from '@hooks/useDeviceDetect';

const AppGetInTouchCard: NextPage<AppGetInTouchCardProps> = ({
   title,
   description,
   linkText,
   url,
}) => {
   const {isMobile} = useDeviceDetect();
   return (
      <SAppGetInTouchCard>
         <SAppGetInTouchTitle>{title}</SAppGetInTouchTitle>
         <SAppGetInTouchDescription>{description}</SAppGetInTouchDescription>
         <AppLinkButton href={url} text={linkText} hasArrow={!isMobile} bold />
      </SAppGetInTouchCard>
   );
};

export default AppGetInTouchCard;
