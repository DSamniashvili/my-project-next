'use cient';
import React, {FC} from 'react';
import {IAppPageFooterProps} from './AppPageFooter.types';
import {
   SAppPageFooter,
   SAppPageLinksGroup,
   SAppPageLinksGroupContent,
   SAppPageLinksGroupHeader,
   SAppPageLinksSection,
   SAppPageFooterLogo,
   SAppPageFooterLink,
   SAppImageWrapper,
} from './AppPageFooter.styled';
import Image from 'next/image';
import OomofoxLogo from '@assets/images/omofoxlogo.png';
import AppPageFooterCopyright from '../AppPageFooterCopyright';

const AppPageFooter: FC<IAppPageFooterProps> = ({navigation}) => {
   return (
      <SAppPageFooter>
         <SAppPageFooterLogo>
            <SAppImageWrapper>
               <Image
                  src={OomofoxLogo}
                  alt="Omofox Logo"
                  style={{objectFit: 'contain'}}
               />
            </SAppImageWrapper>
         </SAppPageFooterLogo>
         <SAppPageLinksSection>
            {navigation.map((section) => (
               <SAppPageLinksGroup key={section.id}>
                  <SAppPageLinksGroupHeader>
                     {section.title}
                  </SAppPageLinksGroupHeader>
                  <SAppPageLinksGroupContent>
                     {section.linkGroup.map((link) => (
                        <SAppPageFooterLink key={link.id} href={link.href}>
                           {link.title}
                        </SAppPageFooterLink>
                     ))}
                  </SAppPageLinksGroupContent>
               </SAppPageLinksGroup>
            ))}
         </SAppPageLinksSection>
         <AppPageFooterCopyright content="© 2020-2022 OMOFOX Inc. Made with ♥︎ from Tbilisi" />
      </SAppPageFooter>
   );
};

export default AppPageFooter;
