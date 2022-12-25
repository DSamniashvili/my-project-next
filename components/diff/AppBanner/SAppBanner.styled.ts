import styled from 'styled-components';
import tw from 'twin.macro';

export const SBannerWrapper = styled.div`
   ${tw`bg-app-color-white flex justify-center items-center w-full`}
`;

export const SBannerContainer = styled.div`
   ${tw`p-app-padding-100 flex items-center gap-x-36 app-max-width-small:flex-col-reverse app-max-width-small:px-app-padding-90 gap-y-10`}
`;
SBannerContainer.defaultProps = {
   className: 'container',
};

export const SBannerContentContainer = styled.div`
   ${tw`flex flex-col app-max-width-small:gap-y-3	`}
`;

export const SBannerContentContainerTitle = styled.h1`
   ${tw`font-extrabold text-app-color-black mb-app-margin-30 app-max-width-small:text-center app-max-width-small:text-app-font-20 app-max-width-small:font-bold app-max-width-small:mb-0`}
`;

export const SBannerContentContainerDescription = styled.p`
   ${tw`text-app-font-26 text-app-color-black-06 mb-app-margin-50 app-max-width-small:text-center app-max-width-small:text-app-font-12 app-max-width-small:mb-3 app-max-width-small:w-64`}
`;

export const SBannerContentContainerButton = styled.div`
   ${tw`app-max-width-small:text-center`}
   button {
      ${tw`w-64 app-max-width-small:w-44 px-0`}
   }
`;

export const SBannerImageWrapper = styled.div`
   position: relative;
   width: 400px;
   height: 400px;
   ${tw`app-max-width-small:w-48 app-max-width-small:h-32 `}
`;
