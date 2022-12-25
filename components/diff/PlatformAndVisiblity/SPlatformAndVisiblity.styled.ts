import tw from 'twin.macro';
import styled from 'styled-components';

export const SPlatformAndVisbilityContainer = styled.div`
   ${tw`px-app-padding-80 py-app-padding-80 bg-app-color-white app-max-width-small:px-app-padding-32
   app-max-width-small:py-app-padding-60 flex justify-around app-max-width-small:flex-col app-max-width-small:items-center`}
`;

export const SPlatformAndVisbilityDivider = styled.div`
   ${tw`w-[1px] h-48 bg-app-color-secondary-02 mx-app-margin-32 flex-none self-center`}

   @media screen and (max-width: 768px) {
      ${tw`h-[1px] w-full mx-0 my-16`}
   }
`;

export const SPlatformAndVisbilityParagraph = styled.p`
   ${tw`my-app-margin-24`}
`;

export const SPlatformAndVisbilityContent = styled.div`
   ${tw`max-w-md`}
   @media screen and (max-width: 768px) {
      ${tw`flex flex-col justify-center items-center text-center`}
   }
   button {
      ${tw`mt-1`}
   }
`;

export const SPlatformAndVisiblityHeader = styled.h2`
   ${tw`text-app-font-48 font-semibold`}
`;
