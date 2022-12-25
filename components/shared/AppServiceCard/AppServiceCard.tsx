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
import AppLinkButton from '../AppLinkButton';
import {useDeviceDetect} from '@hooks/useDeviceDetect';
import {IconByService} from '@utils/iconByService/iconByService.utils';

const AppServiceCard: NextPage<AppServiceCardProps> = ({
   service,
   description,
   linkText,
   url,
}) => {
   const {isMobile} = useDeviceDetect();
   return (
      <SAppServiceCard>
         <SAppServiceIconBox>
            <IconByService service={service} />
         </SAppServiceIconBox>
         <SAppService>{service}</SAppService>
         <SAppServiceDescription>{description}</SAppServiceDescription>
         <AppLinkButton href={url} text={linkText} hasArrow={!isMobile} bold />
      </SAppServiceCard>
   );
};

export default AppServiceCard;
