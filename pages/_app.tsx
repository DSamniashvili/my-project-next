import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {appWithTranslation} from 'next-i18next';
import {AppProviderContainer} from '@providers/AppProviderContainer';

function MyApp({Component, pageProps}: AppProps) {
   return (
      <AppProviderContainer>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>
         <Component {...pageProps} />
      </AppProviderContainer>
   );
}

export default appWithTranslation(MyApp);
