import AppButton from '@components/shared/AppButton';
import {ButtonTypeEnum} from '@components/shared/AppButton/AppButton.types';
import React, {FC} from 'react';
import {
   SPlatformAndVisbilityContent,
   SPlatformAndVisbilityParagraph,
   SPlatformAndVisiblityHeader,
} from '../SPlatformAndVisiblity.styled';

interface IPlatformAndVisbilityContent {
   title: string;
   description: string;
   buttonText: string;
}

export const PlatformAndVisbilityContent: FC<IPlatformAndVisbilityContent> = ({
   title,
   description,
   buttonText,
}) => {
   return (
      <SPlatformAndVisbilityContent>
         <SPlatformAndVisiblityHeader>{title}</SPlatformAndVisiblityHeader>
         <SPlatformAndVisbilityParagraph>
            {description}
         </SPlatformAndVisbilityParagraph>
         <AppButton buttonType={ButtonTypeEnum.QUATERNARY}>
            {buttonText}
         </AppButton>
      </SPlatformAndVisbilityContent>
   );
};
