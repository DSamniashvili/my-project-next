import Link from 'next/link';
import styled, {css} from 'styled-components';
import tw from 'twin.macro';

export const SAppLinkButton = styled(Link)`
   ${tw`flex justify-center items-center gap-2.5 no-underline`}
`;

interface SAppLinkButtonTextProps {
   bold?: boolean;
   underline?: boolean;
   hasArrow?: boolean;
}

export const SAppLinkButtonText = styled.p<SAppLinkButtonTextProps>`
   ${tw`text-app-color-primary m-0 font-semibold text-app-font-14 app-max-width-extra-small:text-app-font-10 flex justify-center [align-items: center]`}

   ${(props) => {
      if (props.bold) {
         return css`
            font-weight: 700;
         `;
      }
   }}

   ${(props) => {
      if (props.hasArrow) {
         return css`
            svg {
               ${tw`ml-2`}
            }
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
