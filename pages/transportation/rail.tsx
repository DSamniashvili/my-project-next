import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';
import type {NextPage} from 'next';
import {AppContainer} from '@components/containers/AppContainer/AppContainer';
import {RailPage} from '@components/appPages/transportation/RailPage/RailPage';

const Rail: NextPage = () => {
   return (
      <AppContainer>
         <RailPage />
      </AppContainer>
   );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
   props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
   },
});

export default Rail;
