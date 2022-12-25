import React from 'react';
import type {NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';
import {AppContainer} from '@components/containers/AppContainer/AppContainer';
import {VisibilityPage} from '@components/appPages/technology/visibility/VisibilityPage';

const Visibility: NextPage = () => {
   return (
      <AppContainer>
         <VisibilityPage />
      </AppContainer>
   );
};

export const getStaticProps = async ({locale}: {locale: string}) => ({
   props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
   },
});

export default Visibility;
