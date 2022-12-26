import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const AppLanguageSwitcher = () => {
   const router = useRouter();
   const {locales, locale: activeLocale} = router;

   const handleLocaleChange = (event: any) => {
      const value = event.target.value;

      router.push(router.route, router.asPath, {
         locale: value,
      });
   };

   return (
      <header>
         <select onChange={handleLocaleChange} value={activeLocale}>
            {locales?.map((locale: string) => {
               return (
                  <option value={locale} key={locale}>
                     {locale}
                  </option>
               );
            })}
         </select>
      </header>
   );
};

export default AppLanguageSwitcher;
