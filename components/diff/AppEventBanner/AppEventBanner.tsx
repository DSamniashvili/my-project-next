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
import AppLinkButton from '@components/shared/AppLinkButton/AppLinkButton';
import {CloseButton} from '@assets/icons/CloseButton';
import {NextPage} from 'next';

const AppEventBannerContent = {
   title: 'UPCOMING WEBINAR:',
   description: 'Market rate and development asia-to-europe sea freight',
   linkText: 'Learn more',
   url: '/',
};

const AppEventBanner: NextPage = () => {
   const {title, description, linkText, url} = AppEventBannerContent;
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
