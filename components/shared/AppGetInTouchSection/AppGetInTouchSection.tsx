'use client';

import React from 'react';
import {NextPage} from 'next';
import {
   SAppGetInTouchSection,
   SAppGetInTouchSectionCards,
   SAppGetInTouchSectionTitle,
   SAppGetInTouchSectionSubTitle,
} from './SAppGetInTouchSection.styled';
import {AppGetInTouchSectionProps} from './AppGetInTouchSection.types';
import AppGetInTouchCard from '../AppGetInTouchCard';

const AppGetInTouchSection: NextPage<AppGetInTouchSectionProps> = ({
   title,
   subTitle,
   features,
}) => {
   return (
      <SAppGetInTouchSection>
         <SAppGetInTouchSectionTitle>{title}</SAppGetInTouchSectionTitle>
         <SAppGetInTouchSectionSubTitle>
            {subTitle}
         </SAppGetInTouchSectionSubTitle>
         <SAppGetInTouchSectionCards>
            {features.map((feature) => (
               <AppGetInTouchCard
                  key={feature.id}
                  id={feature.id}
                  title={feature.title}
                  description={feature.description}
                  linkText={feature.linkText}
                  url={feature.url}
               />
            ))}
         </SAppGetInTouchSectionCards>
      </SAppGetInTouchSection>
   );
};

export default AppGetInTouchSection;
