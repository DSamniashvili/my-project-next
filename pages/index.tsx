import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from 'next-i18next.config';
import AppPageHeader from '@components/shared/AppPageHeader';
import {useModalContext} from '@contexts/ModalContext/ModalContext';
import type {NextPage} from 'next';
import styled from 'styled-components';
import tw from 'twin.macro';
import {AppContainer} from '@components/containers/AppContainer/AppContainer';
import {LandingPage} from '@components/appPages/landing/LandingPage';

const Home: NextPage = () => {
   const {isOpen, toggle} = useModalContext();

   const toggleModal = () => {
      toggle(!isOpen);
   };

   return (
      <AppContainer>
         <LandingPage />
      </AppContainer>
   );
};

export async function getStaticProps({locale}: {locale: string}) {
   return {
      props: {
         ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18nextConfig,
         )),
         // Will be passed to the page component as props
      },
   };
}

export default Home;

// interface Props {
//    isRed: boolean;
// }

// const TWStyledButton = styled.button<Props>(({isRed}) => [
//    isRed ? tw` bg-red-400` : tw`bg-blue-400`,
//    tw`flex justify-center items-center w-full`,
// ]);

// const StyledButton = styled.div`
//    background-color: red;
//    /* padding: 2rem; */
//    ${tw`w-full bg-app-color-white flex`}
//    position: absolute;
//    width: 100%;
//    height: 100%;
//    overflow: hidden;
//    background-color: red;
//    left: 0;
//    /* top: 0 */
// `;
