import styled from 'styled-components';
import tw from 'twin.macro';

export const SEventBannerWrapper = styled.div`
   ${tw`bg-app-color-secondary flex justify-center items-center w-full`}
`;

export const SAppEventBannerContainer = styled.div`
   ${tw`bg-app-color-secondary py-app-padding-24 px-app-padding-100 flex justify-center items-center app-max-width-small:px-app-padding-24 app-max-width-small:py-app-padding-16  w-full`}
`;

export const SEventBannerContentContainer = styled.div`
   ${tw`flex justify-between items-center w-full`}
`;

export const SEventBannerContent = styled.div`
   ${tw`flex gap-5 items-center app-max-width-small:gap-1 app-max-width-extra-small:[width: 300px]`}
   a {
      p {
         ${tw`flex-none text-app-font-14 app-max-width-small:text-app-font-10`}
      }
   }
`;

export const SEventBannerContentTitle = styled.h3`
   ${tw`text-app-font-16 text-app-color-white uppercase font-bold flex-none app-max-width-extra-small:text-app-font-10 app-max-width-small:text-app-font-10`}
`;

export const SEventBannerContentDesctiption = styled.p`
   ${tw`text-app-font-16 text-app-color-white-09 m-0 flex-none`}

   @media screen and (max-width: 480px) {
      ${tw`text-app-font-10 inline-block whitespace-nowrap overflow-hidden text-ellipsis`}
      width: 30%;
   }
   @media screen and (max-width: 1024px) and (min-width: 481px) {
      ${tw`text-app-font-12`}
   }
`;

export const SEventBannerCloseButton = styled.button`
   svg {
      ${tw`app-max-width-small:w-2.5 app-max-width-small:h-2.5`}
      path {
         ${tw`fill-app-color-white`}
      }
   }
`;

SAppEventBannerContainer.defaultProps = {
   className: 'container',
};
