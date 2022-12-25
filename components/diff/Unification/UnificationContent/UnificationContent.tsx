import AppButton from '@components/shared/AppButton';
import AppLinkButton from '@components/shared/AppLinkButton/AppLinkButton';
import {useDeviceDetect} from '@hooks/useDeviceDetect';
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
   const isReverse = index % 2 !== 0;
   const {isMobile} = useDeviceDetect();

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
                     <AppLinkButton href="#" text={button_text} />
                  ) : !isReverse ? (
                     // return different button components on different indexes
                     <AppLinkButton href="#" text={button_text} />
                  ) : (
                     <AppButton>{button_text}</AppButton>
                  )}
               </SUnificationLink>
            </SPersonalizedServicesContent>
            <SUnificationFigure>
               <SUnificationImage
                  src={image}
                  alt={title}
                  style={{borderRadius: '20px', width: '100%'}}
                  objectFit="cover"
                  layout="fill"
               />
            </SUnificationFigure>
         </SPersonalizedServices>
      </SUnificationContainerWrapper>
   );
};
