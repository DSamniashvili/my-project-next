import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppPageFooter = styled.div`
   ${tw`bg-app-color-background py-app-padding-80 app-max-width-small:py-10 px-app-padding-100 app-max-width-small:px-6`}
`;

export const SAppPageLinksSection = styled.div`
   ${tw`mt-app-margin-60 app-max-width-small:mt-12 mb-app-margin-120 app-max-width-small:mb-20 flex app-max-width-small:flex-col gap-x-36 gap-y-20`}
`;

export const SAppPageLinksGroup = styled.div`
   ${tw`flex flex-col gap-6`}
`;

export const SAppPageLinksGroupHeader = styled.div`
   ${tw`text-app-font-20 font-semibold`}
`;

export const SAppPageLinksGroupContent = styled.div`
   ${tw`flex flex-col gap-3 app-max-width-small:gap-4`}
`;

export const SAppPageFooterLogo = styled.div``;

export const SAppPageFooterLink = styled(Link)`
   ${tw`no-underline text-app-color-secondary text-app-font-16`}
`;

export const SAppImageWrapper = styled.div`
   position: relative;
   width: 120px;
   height: 17px;

   @media screen and (max-width: 480px) {
      width: 63px;
      height: 9px;
   }
`;

SAppPageFooter.defaultProps = {
   className: 'container',
};
