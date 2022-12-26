import styled from 'styled-components';
import tw from 'twin.macro';

export const SFooterWrapper = styled.div`
   ${tw`flex items-center justify-between gap-y-[30px] app-max-width-small:flex-col-reverse`}
`;

export const SFooterContent = styled.div`
   ${tw`flex items-center gap-x-10 text-center text-app-font-15 app-max-width-small:text-app-font-12`}
`;
