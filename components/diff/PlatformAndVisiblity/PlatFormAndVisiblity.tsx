'use client';
import {FC} from 'react';
import {
   SPlatformAndVisbilityContainer,
   SPlatformAndVisbilityDivider,
} from './SPlatformAndVisiblity.styled';
import {PlatformAndVisbilityContent} from './PlatformAndVisbilityContent/PlatformAndVisbilityContent';
import {PlatFormAndVisiblityProps} from './PlatFormAndVisiblity.types';

const PlatFormAndVisiblity: FC<PlatFormAndVisiblityProps> = ({
   translations,
}) => {
   const platformAndVisibilityObj = [
      {
         id: 1,
         title: translations.platform.title,
         description: translations.platform.description,
         buttonText: translations.platform.button_text,
      },
      {
         id: 2,
         title: translations.visibility.title,
         description: translations.visibility.description,
         buttonText: translations.visibility.button_text,
      },
   ];

   return (
      <SPlatformAndVisbilityContainer>
         {platformAndVisibilityObj.map(
            ({id, title, description, buttonText}, index) => {
               return (
                  <div key={id} className={'flex'}>
                     <div>
                        <PlatformAndVisbilityContent
                           title={title}
                           description={description}
                           buttonText={buttonText}
                        />
                     </div>
                     {index === 0 && <SPlatformAndVisbilityDivider />}
                  </div>
               );
            },
         )}
      </SPlatformAndVisbilityContainer>
   );
};

export default PlatFormAndVisiblity;
