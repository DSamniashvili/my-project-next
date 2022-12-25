'use cient';
import React, {FC} from 'react';
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
import {NextPage} from 'next';
import routes from '@constant/routes';

const navigation = [
   {
      id: 1,
      title: 'TECHNOLOGY',
      linkGroup: [
         {
            id: 1,
            title: 'Platform',
            href: routes.PLATFORM,
         },
         {
            id: 2,
            title: 'Visibility',
            href: routes.VISIBILITY,
         },
      ],
   },
   {
      id: 2,
      title: 'SERVICES',
      linkGroup: [
         {
            id: 1,
            title: 'Customs',
            href: '/',
         },
         {
            id: 2,
            title: 'Insurance',
            href: '/',
         },
         {
            id: 3,
            title: 'Warehousing',
            href: '/',
         },
         {
            id: 4,
            title: 'Order management',
            href: '/',
         },
      ],
   },
   {
      id: 3,
      title: 'TRANSPORTATION',
      linkGroup: [
         {
            id: 1,
            title: 'Trucking',
            href: '/',
         },
         {
            id: 2,
            title: 'Air-freight',
            href: '/',
         },
         {
            id: 3,
            title: 'Ocean-freight',
            href: '/',
         },
         {
            id: 4,
            title: 'Rail',
            href: '/',
         },
      ],
   },
   {
      id: 4,
      title: 'COMPANY',
      linkGroup: [
         {
            id: 1,
            title: 'About us',
            href: '/',
         },
         {
            id: 2,
            title: 'Blog',
            href: '/',
         },
         {
            id: 3,
            title: 'Careers',
            href: '/',
         },
         {
            id: 4,
            title: 'Events',
            href: '/',
         },
         {
            id: 5,
            title: 'Press',
            href: '/',
         },
         {
            id: 6,
            title: 'Contact',
            href: '/',
         },
      ],
   },
];

const AppPageFooter = () => {
   return (
      <SAppPageFooter>
         <SAppPageFooterLogo>
            <SAppImageWrapper>
               <Image
                  src={OomofoxLogo}
                  alt="Omofox Logo"
                  style={{objectFit: 'contain'}}
                  layout="fill"
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
