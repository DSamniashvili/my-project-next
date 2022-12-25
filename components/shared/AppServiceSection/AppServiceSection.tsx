import React from 'react';
import {NextPage} from 'next';
import {
   SAppServiceSection,
   SAppServiceSectionCards,
   SAppServiceSectionTitle,
} from './SAppServiceSection.styled';
import {AppServiceSectionProps} from './AppServiceSection.types';
import AppServiceCard from '../AppServiceCard';

const AppServiceSection: NextPage<AppServiceSectionProps> = ({
   title,
   services,
}) => {
   return (
      <SAppServiceSection>
         <SAppServiceSectionTitle>{title}</SAppServiceSectionTitle>
         <SAppServiceSectionCards>
            {services.map((service) => (
               <AppServiceCard
                  key={service.id}
                  id={service.id}
                  service={service.service}
                  description={service.description}
                  linkText={service.linkText}
                  url={service.url}
               />
            ))}
         </SAppServiceSectionCards>
      </SAppServiceSection>
   );
};

export default AppServiceSection;
