'use client';
import AppButton from '@components/shared/AppButton';
import AppLinkButton from '@components/shared/AppLinkButton/AppLinkButton';
import {ButtonSizes} from '@components/shared/AppLinkButton/AppLinkButton.types';
import {useDeviceDetect} from 'hooks';
import {FC} from 'react';

import {
   SPersonalizedServices,
   SPersonalizedServicesContent,
   SPersonalizedServicesContentH3,
   SPersonalizedServicesContentParagraph,
   SUnificationContainerWrapper,
   SUnificationFigure,
   SUnificationImage,
   SUnificationLink,
} from '../SUnification.styled';
import {UnificationContentProps} from './UnificationContent.types';

export const UnificationContent: FC<UnificationContentProps> = ({
   button_text,
   description,
   index,
   title,
   image,
}) => {
   const {isMobile} = useDeviceDetect();
   const isReverse = index % 2 !== 0;

   return (
      // return white and reversed component if index module is 0
      <SUnificationContainerWrapper reverse={isReverse}>
         <SPersonalizedServices reverse={isReverse}>
            <SPersonalizedServicesContent>
               <SPersonalizedServicesContentH3>
                  {title}
               </SPersonalizedServicesContentH3>
               <SPersonalizedServicesContentParagraph>
                  {description}
               </SPersonalizedServicesContentParagraph>
               <SUnificationLink>
                  {isMobile ? (
                     <AppLinkButton
                        href="#"
                        text={button_text}
                        size={ButtonSizes.SMALL}
                     />
                  ) : !isReverse ? (
                     // return different button components on different indexes
                     <AppLinkButton
                        href="#"
                        text={button_text}
                        size={ButtonSizes.SMALL}
                     />
                  ) : (
                     <AppButton>{button_text}</AppButton>
                  )}
               </SUnificationLink>
            </SPersonalizedServicesContent>
            <SUnificationFigure>
               <SUnificationImage
                  width="200"
                  height="200"
                  src={image}
                  alt={title}
                  priority={true}
               />
            </SUnificationFigure>
         </SPersonalizedServices>
      </SUnificationContainerWrapper>
   );
};
