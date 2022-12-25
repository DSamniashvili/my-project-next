import styled, {css} from 'styled-components';
import Image from 'next/image';
import tw from 'twin.macro';

export interface UnificationProps {
   reverse?: boolean;
}

export const SUnificationContainerWrapper = styled.div<UnificationProps>`
   ${tw`grid place-items-center`}
   ${(props) => {
      if (props.reverse) {
         return css`
            ${tw`bg-app-color-background`}
         `;
      }

      return css`
         ${tw`bg-app-color-white`}
      `;
   }}
`;

export const SUnificationHeader = styled.div`
   ${tw`px-app-padding-100 w-full pb-0 flex items-center justify-between app-max-width-small:flex-col app-max-width-small:px-8`}
   box-sizing: border-box;
   button {
      ${tw`app-max-width-small:mt-8`}
   }
`;

export const SUnificationHeaderH2 = styled.h2`
   ${tw`font-bold max-w-2xl app-max-width-small:text-center`}
`;

export const SPersonalizedServices = styled.section<UnificationProps>`
   ${tw`px-app-padding-100 pt-20 pb-12 w-full flex flex-row-reverse items-center justify-between gap-x-3 app-max-width-small:flex-col-reverse app-max-width-small:px-8`}
   box-sizing: border-box;
   ${(props) => {
      if (!props.reverse) {
         return css`
            ${tw`bg-app-color-white flex-row`}
         `;
      }
   }}
`;

export const SPersonalizedServicesContent = styled.div`
   ${tw`flex flex-col`}
`;

export const SPersonalizedServicesContentH3 = styled.h3`
   ${tw`font-bold my-6 text-app-color-black-08 app-max-width-small:text-center`}
`;

export const SPersonalizedServicesContentParagraph = styled.p`
   ${tw`text-app-color-black-06 mt-1 max-w-2xl app-max-width-small:text-center`}
`;

export const SUnificationLink = styled.div`
   ${tw`mt-10 app-max-width-small:mx-auto`}
   a {
      ${tw`app-min-width-small:justify-start`}
      p {
         ${tw`font-semibold`}
      }
   }
`;

export const SUnificationFigure = styled.figure`
   ${tw`m-0 p-0 h-64 overflow-hidden rounded-2xl max-w-[450px] app-max-width-extra-small:max-w-[400px] app-max-width-extra-small:h-52`}
`;

export const SUnificationImage = styled(Image)`
   ${tw`w-full h-full object-cover`}
`;

SUnificationHeader.defaultProps = {
   className: 'container',
};

SPersonalizedServices.defaultProps = {
   className: 'container',
};
