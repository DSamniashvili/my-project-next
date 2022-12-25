import tw from 'twin.macro';
import styled, {css} from 'styled-components';

export const SAppLanguageSwitcherContainer = styled.div`
   ${tw`w-full bg-app-color-white py-app-padding-100 flex`}
   position: absolute;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background-color: red;
`;

export const SAppLanguageSwitcherWrapper = styled.nav`
   ${tw`w-full flex flex-col`}
`;
