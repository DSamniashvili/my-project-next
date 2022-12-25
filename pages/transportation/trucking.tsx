import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';
import type {NextPage} from 'next';
import {AppContainer} from '@components/containers/AppContainer/AppContainer';
import {TruckingPage} from '@components/appPages/transportation/trucking/TruckingPage';

const Trucking: NextPage = () => {
   return (
      <AppContainer>
         <TruckingPage />
      </AppContainer>
   );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
   props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
   },
});

export default Trucking;
