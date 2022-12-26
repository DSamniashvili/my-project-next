import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from 'next-i18next.config';
import {AppContainer} from '@components/containers/AppContainer/AppContainer';
import {LandingPage} from '@components/appPages/landing/LandingPage';
import {request} from '../lib/datocms';
import {useTranslation} from 'next-i18next';

const Home = ({data}: {data: any}) => {
   const {t} = useTranslation();
   return (
      <AppContainer>
         {/* <div>{JSON.stringify(data, null, 2)}</div> */}
         <LandingPage />
      </AppContainer>
   );
};

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
	allPosts(first: $limit) {
		id
	  title
	  slug
	}
  }`;

export async function getStaticProps({locale}: {locale: string}) {
   const data = await request({
      query: HOMEPAGE_QUERY,
      variables: {limit: 10},
      includeDrafts: true,
      excludeInvalid: true,
   });
   return {
      props: {
         ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18nextConfig,
         )),
         data,
         // Will be passed to the page component as props
      },
   };
}

export default Home;
