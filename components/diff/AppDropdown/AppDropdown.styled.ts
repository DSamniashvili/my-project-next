import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppHeaderNavigationDwopdown = styled.button`
   ${tw`mr-8`}

   :hover {
      div {
         display: block;

         svg {
            display: inline-block;
         }
      }
   }
`;

export const SAppHeaderDropdownTitleContainer = styled.div`
   ${tw`flex flex-row justify-center [align-items: center]`}
`;

export const SAppHeaderDropdownTitle = styled.span`
   ${tw`mr-1`}
`;

export const SDropdownContent = styled.div`
   display: none;
   position: absolute;
   background-color: #f9f9f9;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   z-index: 1;
   /* margin-top: 10px; */

   a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;

      :hover {
         ${tw`cursor-pointer`}
         background-color: #ddd;
      }
   }
`;
