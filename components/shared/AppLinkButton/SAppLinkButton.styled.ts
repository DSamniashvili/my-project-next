import Link from 'next/link';
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import {ButtonSizes} from './AppLinkButton.types';

export const SAppLinkButton = styled(Link)`
   ${tw`flex justify-center items-center gap-2.5 no-underline`}
`;

interface SAppLinkButtonTextProps {
   size: ButtonSizes;
   underline?: boolean;
}

export const SAppLinkButtonText = styled.p<SAppLinkButtonTextProps>`
   ${tw`text-app-color-primary m-0 font-semibold`}

   ${(props) => {
      if (props.size === ButtonSizes.SMALL) {
         return css`
            ${tw`text-sm font-bold`}
         `;
      }
      if (props.size === ButtonSizes.LARGE) {
         return css`
            ${tw`text-xl font-semibold`}
         `;
      }
   }}

   ${(props) => {
      if (props.underline) {
         return css`
            ${tw`underline`}
         `;
      }
   }}
`;
