'use client';
import React, {FC} from 'react';
import {
   SEventBannerCloseButton,
   SEventBannerContent,
   SEventBannerContentContainer,
   SEventBannerContentDesctiption,
   SEventBannerContentTitle,
   SEventBannerWrapper,
   SAppEventBannerContainer,
} from './SAppEventBanner.styled';
import {EventBannerProps} from './AppEventBanner.types';
import AppLinkButton from '@components/shared/AppLinkButton/AppLinkButton';
import {CloseButton} from '@assets/icons/CloseButton';

const AppEventBanner: FC<EventBannerProps> = ({
   title,
   description,
   linkText,
   url = '#',
}) => {
   // TODO - temporarily handling event banner in this way. Will be updated when all routes are ready!
   const handleCloseBanner = () => {
      window.location.reload();
   };

   return (
      <SEventBannerWrapper>
         <SAppEventBannerContainer>
            <SEventBannerContentContainer>
               <SEventBannerContent>
                  <SEventBannerContentTitle>{title}</SEventBannerContentTitle>
                  <SEventBannerContentDesctiption>
                     {description}
                  </SEventBannerContentDesctiption>
                  <AppLinkButton href={url} underline text={linkText} />
               </SEventBannerContent>
               <SEventBannerCloseButton onClick={handleCloseBanner}>
                  <CloseButton />
               </SEventBannerCloseButton>
            </SEventBannerContentContainer>
         </SAppEventBannerContainer>
      </SEventBannerWrapper>
   );
};

export default AppEventBanner;
