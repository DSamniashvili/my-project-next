import {FC} from 'react';
import {
   SPlatformAndVisbilityContainer,
   SPlatformAndVisbilityDivider,
   SPlatformAndVisibilityContentContainer,
   SPlatformAndVisibilityWrapper,
} from './SPlatformAndVisiblity.styled';
import {PlatformAndVisbilityContent} from './PlatformAndVisbilityContent/PlatformAndVisbilityContent';
import {PlatFormAndVisiblityProps} from './PlatFormAndVisiblity.types';
import {useDeviceDetect} from '@hooks/useDeviceDetect';

const PlatFormAndVisiblity: FC<PlatFormAndVisiblityProps> = () => {
   const {isMobile} = useDeviceDetect();
   const platformAndVisibilityObj = [
      {
         id: 1,
         title: 'platform',
         description:
            'See the limitless opportunities to organize and manage the supply chain with less clicks and more logistics.',
         buttonText: 'get your demo',
         url: '/',
      },
      {
         id: 2,
         title: 'visibility',
         description:
            'Sit back, relax, and enjoy the visualization of your cargo in transit through OMOFOX platform.',
         buttonText: 'Join now',
         url: '/',
      },
   ];

   return (
      <SPlatformAndVisbilityContainer>
         <SPlatformAndVisibilityWrapper>
            <SPlatformAndVisibilityContentContainer>
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
                           {index === 0 && !isMobile && (
                              <SPlatformAndVisbilityDivider />
                           )}
                        </div>
                     );
                  },
               )}
            </SPlatformAndVisibilityContentContainer>
         </SPlatformAndVisibilityWrapper>
      </SPlatformAndVisbilityContainer>
   );
};

export default PlatFormAndVisiblity;
