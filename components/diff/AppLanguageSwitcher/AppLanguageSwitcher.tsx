'use client';
import {useLanguageSwitcherContext} from '@contexts/index';
import Link from 'next/link';
import {
   SAppLanguageSwitcherContainer,
   SAppLanguageSwitcherWrapper,
} from './AppLanguageSwitcher.styled';
import {ILanguage} from './AppLanguageSwitcher.types';

const AppLanguageSwitcher = ({path}: {path: string}) => {
   const {languageSwitcherModalOpen} = useLanguageSwitcherContext();

   const languages: ILanguage[] = [
      {
         slug: 'en',
         name: 'English',
      },
      {
         slug: 'ka',
         name: 'ქართული',
      },
   ];

   return languageSwitcherModalOpen ? (
      <SAppLanguageSwitcherContainer>
         <SAppLanguageSwitcherWrapper>
            {languages.map(({slug, name}: ILanguage) => (
               <Link href={`/${slug}/${path}`} scroll={false} key={slug}>
                  {name}
               </Link>
            ))}
         </SAppLanguageSwitcherWrapper>
      </SAppLanguageSwitcherContainer>
   ) : (
      <></>
   );
};

export default AppLanguageSwitcher;
