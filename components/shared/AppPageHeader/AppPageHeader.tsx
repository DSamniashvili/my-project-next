import React from 'react';
import {NextPage} from 'next';
import {
   SAppImageWrapper,
   SAppPageHeader,
   SAppPageHeaderWrapper,
   SPageHeaderLeftPanel,
   SPageHeaderRightPanel,
} from './SAppPageHeader.styled';
import AppLanguageSwitcher from '@components/diff/AppLanguageSwitcher';
import Image from 'next/image';
import OomofoxLogo from '@assets/images/omofoxlogo.png';
import AppButton from '../AppButton';
import {ButtonTypeEnum} from '../AppButton/AppButton.types';
import AppLinkButton from '../AppLinkButton';
import {useTranslation} from 'next-i18next';
import Link from 'next/link';
import AppDropdown from '@components/diff/AppDropdown';
import {useDeviceDetect} from '@hooks/useDeviceDetect';
import BurgerMenu from '@assets/icons/BurgerMenu';

const AppPageHeader: NextPage = () => {
   const {t} = useTranslation();
   const {isMobile} = useDeviceDetect();

   return (
      <SAppPageHeader>
         <SAppPageHeaderWrapper>
            {!isMobile ? (
               <>
                  <SPageHeaderLeftPanel>
                     <SAppImageWrapper>
                        <Link href={'/'}>
                           <Image
                              src={OomofoxLogo}
                              alt="Omofox Logo"
                              style={{objectFit: 'contain'}}
                              layout="fill"
                           />
                        </Link>
                     </SAppImageWrapper>
                     <AppDropdown
                        name={'products'}
                        items={[
                           {
                              id: 'products1',
                              name: 'products1',
                              url: '/',
                           },
                           {
                              id: 'products2',
                              name: 'products2',
                              url: '/',
                           },
                           {
                              id: 'products3',
                              name: 'products3',
                              url: '/',
                           },
                        ]}
                     />
                     <AppDropdown
                        name={'company'}
                        items={[
                           {
                              id: 'company1',
                              name: 'company1',
                              url: '/',
                           },
                           {
                              id: 'company2',
                              name: 'company2',
                              url: '/',
                           },
                           {
                              id: 'company3',
                              name: 'company3',
                              url: '/',
                           },
                        ]}
                     />
                  </SPageHeaderLeftPanel>
                  <SPageHeaderRightPanel>
                     <AppButton
                        buttonType={ButtonTypeEnum.SECONDARY}
                        style={{
                           fontSize: '14px',
                        }}>
                        {t('get_started')}
                     </AppButton>
                     <AppLinkButton href="#" text={t('sign_in')} />
                     <AppLanguageSwitcher />
                  </SPageHeaderRightPanel>
               </>
            ) : (
               <>
                  <SAppImageWrapper>
                     <Link href={'/'}>
                        <Image
                           src={OomofoxLogo}
                           alt="Omofox Logo"
                           style={{objectFit: 'contain'}}
                           layout="fill"
                        />
                     </Link>
                  </SAppImageWrapper>
                  <BurgerMenu />
               </>
            )}
         </SAppPageHeaderWrapper>
      </SAppPageHeader>
   );
};

export default AppPageHeader;
