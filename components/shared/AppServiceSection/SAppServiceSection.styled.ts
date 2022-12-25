import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppServiceSection = styled.section`
   ${tw`bg-app-color-background w-full flex flex-col items-center py-24 app-max-width-small:py-12`}
`;

export const SAppServiceSectionTitle = styled.h2`
   ${tw`app-max-width-small:text-app-font-22 font-bold w-full box-border px-24 app-max-width-small:max-w-[296px] app-max-width-small:px-6 app-max-width-small:text-center`}
`;

export const SAppServiceSectionCards = styled.div`
   ${tw`mt-20 app-max-width-small:mt-12 flex app-max-width-small:flex-col flex-wrap gap-x-12 gap-y-14 app-max-width-small:gap-y-8 box-border px-24 app-max-width-small:px-10`}
`;

SAppServiceSectionTitle.defaultProps = {
   className: 'container',
};

SAppServiceSectionCards.defaultProps = {
   className: 'container',
};
