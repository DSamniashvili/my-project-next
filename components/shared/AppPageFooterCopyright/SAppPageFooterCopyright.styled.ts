import styled from 'styled-components';
import tw from 'twin.macro';

export const SFooterWrapper = styled.div`
   ${tw`flex items-center justify-between bg-app-color-background gap-y-[30px] app-max-width-small:flex-col-reverse`}
`;

export const SFooterContent = styled.div`
   ${tw`flex items-center gap-x-[40px] text-center`}
`;
