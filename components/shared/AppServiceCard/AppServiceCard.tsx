'use client';

import React from 'react';
import {NextPage} from 'next';
import {
   SAppService,
   SAppServiceCard,
   SAppServiceDescription,
   SAppServiceIconBox,
} from './SAppServiceCard.styled';
import {AppServiceCardProps} from './AppServiceCard.types';
import {ButtonSizes} from '../AppLinkButton/AppLinkButton.types';
import AppLinkButton from '../AppLinkButton';
import { IconByService } from '@utils/iconByService/iconByService.utils';

const AppServiceCard: NextPage<AppServiceCardProps> = ({
   service,
   description,
   linkText,
}) => {
   return (
      <SAppServiceCard>
         <SAppServiceIconBox>
            <IconByService service={service} />
         </SAppServiceIconBox>
         <SAppService>{service}</SAppService>
         <SAppServiceDescription>{description}</SAppServiceDescription>
         <AppLinkButton
            href="/"
            size={ButtonSizes.SMALL}
            text={linkText}
            hasArrow
         />
      </SAppServiceCard>
   );
};

export default AppServiceCard;
