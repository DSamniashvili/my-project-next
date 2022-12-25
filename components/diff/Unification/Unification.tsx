'use client';
import AppButton from '@components/shared/AppButton';
import {ButtonTypeEnum} from '@components/shared/AppButton/AppButton.types';
import {UnificationContent} from './UnificationContent';
import {
   SUnificationHeader,
   SUnificationHeaderH2,
   SUnificationContainerWrapper,
} from './SUnification.styled';
import {UnificationData} from './Unification.data';

const Unification = () => (
   <section>
      <SUnificationContainerWrapper>
         <SUnificationHeader>
            <SUnificationHeaderH2>
               One space for unify your company supply chain
            </SUnificationHeaderH2>
            <AppButton buttonType={ButtonTypeEnum.SECONDARY}>
               Get Started
            </AppButton>
         </SUnificationHeader>
      </SUnificationContainerWrapper>
      {UnificationData.map((data, index) => (
         <UnificationContent {...data} index={index} key={data.id} />
      ))}
   </section>
);

export default Unification;
