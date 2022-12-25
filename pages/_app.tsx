import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import LanguageSwitcherContextProvider from 'contexts/LanguageSwitcherContext/LanguageSwitcherContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
	<LanguageSwitcherContextProvider>
	<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
	</LanguageSwitcherContextProvider>
  )
}

export default MyApp;
