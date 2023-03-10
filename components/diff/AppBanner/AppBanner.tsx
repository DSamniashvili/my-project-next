import AppButton from '@components/shared/AppButton';
import React, {FC} from 'react';
import Image from 'next/image';

import {BannerProps} from './AppBanner.types';
import {
   SBannerContainer,
   SBannerContentContainer,
   SBannerContentContainerButton,
   SBannerContentContainerDescription,
   SBannerContentContainerTitle,
   SBannerImageWrapper,
   SBannerWrapper,
} from './SAppBanner.styled';

const AppBanner: FC<BannerProps> = ({
   title,
   description,
   buttonText,
   image,
   url,
}) => {
   const strArray = title.split(' ');
   return (
      <SBannerWrapper>
         <SBannerContainer>
            <SBannerContentContainer>
               <SBannerContentContainerTitle>
                  <span>
                     {strArray.slice(0, strArray.length - 1).join(' ')}
                  </span>
                  &nbsp;
                  <span style={{color: 'red'}}>
                     {strArray[strArray.length - 1]}
                  </span>
               </SBannerContentContainerTitle>
               <SBannerContentContainerDescription>
                  {description}
               </SBannerContentContainerDescription>
               <SBannerContentContainerButton>
                  <AppButton>{buttonText}</AppButton>
               </SBannerContentContainerButton>
            </SBannerContentContainer>
            <SBannerImageWrapper>
               <Image
                  src={image}
                  alt="container-img"
                  style={{borderRadius: '20px', width: '100%'}}
                  objectFit="cover"
                  layout="fill"
               />
            </SBannerImageWrapper>
         </SBannerContainer>
      </SBannerWrapper>
   );
};

export default AppBanner;
