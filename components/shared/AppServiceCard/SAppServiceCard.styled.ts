import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppServiceCard = styled.div`
   ${tw`flex flex-col justify-center items-center w-[384px] app-max-width-small:w-[296px] h-[332px] app-max-width-small:h-[240px] bg-app-color-white rounded-app-border-radius-20 box-border px-10`}

   a {
      p {
         ${tw`text-app-font-14 app-min-width-small:font-app-font-montserrat`}
      }
   }
`;

export const SAppServiceIconBox = styled.div`
   ${tw`flex justify-center items-center w-[100px] app-max-width-small:w-[60px] h-[100px] app-max-width-small:h-[60px] rounded-app-border-radius-20 app-max-width-small:rounded-app-border-radius-10 bg-app-color-primary-05`}

   svg {
      ${tw`w-8 h-8 app-max-width-small:w-5 app-max-width-small:h-5`}
   }
`;

export const SAppService = styled.h3`
   ${tw`text-app-font-22 app-max-width-small:text-app-font-16 font-bold app-max-width-small:font-semibold text-app-color-black mt-10 app-max-width-small:mt-4 app-min-width-small:font-app-font-montserrat`}
`;

export const SAppServiceDescription = styled.p`
   ${tw`text-app-font-16 app-max-width-small:text-app-font-12 font-medium text-app-color-black mt-4 mb-10 app-max-width-small:mb-8 text-center app-min-width-small:font-app-font-montserrat`}
`;
