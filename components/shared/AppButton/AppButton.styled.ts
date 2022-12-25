import styled, {css} from 'styled-components';
import {AppButtonProps, ButtonTypeEnum} from './AppButton.types';
import tw from 'twin.macro';
export const SAppButton = styled.button<AppButtonProps>`
   ${tw`px-14 py-3.5 rounded-app-rounded-10 font-bold cursor-pointer transition-all border-none scale-100`}
   font-size: var(--font-20);
   @media screen and (max-width: 768px) {
      font-size: var(--font-14);
      svg {
         transform: translate(-10px, 2px) !important;
      }
   }
   :active {
      /* transform: scale(0.98) !important; */
      ${tw`cursor-pointer`}
   }
   :hover {
      ${tw`cursor-pointer`}/* transform: scale(1.02); */
   }
   svg {
      transform: translate(-10px, 0);
      path {
         ${tw`fill-app-color-primary`}
      }
   }
   ${(props) => {
      if (props.buttonType === ButtonTypeEnum.PRIMARY) {
         return css`
            ${tw`bg-app-color-primary text-app-color-white`}
            :active {
               ${tw`bg-app-color-primary`}
            }
            svg {
               path {
                  ${tw`fill-app-color-white`}
               }
            }
         `;
      }
      if (props.buttonType === ButtonTypeEnum.SECONDARY) {
         return css`
            ${tw`bg-transparent text-app-color-primary border-2 border-solid border-app-color-primary`}
         `;
      }
      if (props.buttonType === ButtonTypeEnum.TERTIARY) {
         return css`
            ${tw`bg-transparent text-app-color-primary underline`}
         `;
      }

      if (props.buttonType === ButtonTypeEnum.QUATERNARY) {
         return css`
            ${tw`text-app-color-primary border-2 border-solid border-app-color-primary bg-app-color-primary-01`}
         `;
      }

      if (props.buttonType === ButtonTypeEnum.ADDITIONAL) {
         return css`
            ${tw`text-app-color-black bg-app-color-white`}
            svg {
               path {
                  ${tw`fill-app-color-black`}
               }
            }
         `;
      }
   }}
`;

SAppButton.defaultProps = {
   buttonType: ButtonTypeEnum.PRIMARY,
   role: 'button',
};
