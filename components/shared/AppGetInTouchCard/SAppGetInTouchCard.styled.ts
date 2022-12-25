import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppGetInTouchCard = styled.div`
   ${tw`flex flex-col justify-center items-center w-[384px] app-max-width-small:w-[285px] h-[233px] app-max-width-small:h-[172px] bg-app-color-white rounded-app-border-radius-20 box-border px-10`}
   border: 1px solid rgba(179, 179, 179, 0.25);

   a {
      p {
         ${tw`text-app-font-14 app-min-width-small:font-app-font-montserrat`}
      }
   }
`;

export const SAppGetInTouchTitle = styled.h3`
   ${tw`app-min-width-extra-small:text-app-font-26 font-bold text-app-color-black app-min-width-small:font-app-font-montserrat`}
`;

export const SAppGetInTouchDescription = styled.p`
   ${tw`text-app-font-16 app-max-width-small:text-app-font-12 font-medium text-app-color-black mt-6 app-max-width-small:mt-3 mb-8 app-max-width-small:mb-6 text-center app-min-width-small:font-app-font-montserrat`}
`;
