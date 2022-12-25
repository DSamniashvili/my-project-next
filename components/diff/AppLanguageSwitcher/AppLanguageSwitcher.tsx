import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const AppLanguageSwitcher = () => {
   const router = useRouter();
   const {locales, locale: activeLocale, pathname, query, asPath} = router;

   const handleLocaleChange = (event: any) => {
      const value = event.target.value;

      router.push(router.route, router.asPath, {
         locale: value,
      });
   };

   return (
      <header>
         <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
         </nav>

         <select onChange={handleLocaleChange} value={activeLocale}>
            {locales?.map((locale, index) => {
               return (
                  <option value={locale} key={locale}>
                     {/* <Link href={{pathname, query}} as={asPath} locale={locale}> */}
                     {locale}
                     {/* </Link> */}
                  </option>
               );
            })}
         </select>
      </header>
   );
};

export default AppLanguageSwitcher;
