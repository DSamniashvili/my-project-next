import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppGetInTouchSection = styled.section`
   ${tw`bg-app-color-white w-full flex flex-col items-center py-24 app-max-width-small:py-12`}
`;

export const SAppGetInTouchSectionTitle = styled.h2`
   ${tw`font-bold w-full box-border px-24 app-max-width-small:max-w-[296px] app-max-width-small:px-6 app-max-width-small:text-center`}
`;

export const SAppGetInTouchSectionSubTitle = styled.p`
   ${tw`mt-3 app-max-width-small:text-app-font-16 font-medium w-full box-border px-24 app-max-width-small:max-w-[296px] app-max-width-small:px-6 app-max-width-small:text-center`}
`;

export const SAppGetInTouchSectionCards = styled.div`
   ${tw`mt-16 app-max-width-small:mt-12 flex app-max-width-small:flex-col flex-wrap gap-x-11 gap-y-14 app-max-width-small:gap-y-10 box-border px-24 app-max-width-small:px-11`}
`;

SAppGetInTouchSectionTitle.defaultProps = {
   className: 'container',
};

SAppGetInTouchSectionSubTitle.defaultProps = {
   className: 'container',
};

SAppGetInTouchSectionCards.defaultProps = {
   className: 'container',
};
