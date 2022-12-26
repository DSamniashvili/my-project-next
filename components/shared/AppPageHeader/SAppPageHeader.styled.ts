import tw from 'twin.macro';
import styled from 'styled-components';

export const SAppPageHeader = styled.header`
   ${tw`bg-app-color-white flex w-full`}
`;

export const SAppPageHeaderWrapper = styled.div`
   ${tw`flex items-center w-full py-12 px-app-padding-100 app-max-width-extra-small:px-6 app-max-width-extra-small:justify-between app-max-width-extra-small:py-6`}
`;

export const SPageHeaderLeftPanel = styled.nav`
   ${tw`flex items-center justify-start [width: 70%]`}
`;
export const SPageHeaderRightPanel = styled.div`
   ${tw`flex items-center justify-between [width: 30%]`}
`;

export const SAppImageWrapper = styled.button`
   ${tw`mr-8`}
   position: relative;
   width: 120px;
   height: 17px;

   @media screen and (max-width: 480px) {
      width: 63px;
      height: 9px;
   }
`;

SAppPageHeaderWrapper.defaultProps = {
   className: 'container',
};
