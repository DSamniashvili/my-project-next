import styled from 'styled-components';
import tw from 'twin.macro';

export const SAppServiceCard = styled.div`
   ${tw`flex flex-col justify-center items-center w-[384px] h-[332px] p-app-padding-40 bg-app-color-white rounded-app-rounded-20`}
`;

export const SAppServiceIconBox = styled.div`
   ${tw`flex justify-center items-center w-[100px] h-[100px] rounded-app-rounded-20 bg-app-color-primary-05`}
`;

export const SAppService = styled.div`
   ${tw`text-app-font-20 font-bold text-app-color-black mt-app-margin-40`}
`;

export const SAppServiceDescription = styled.p`
   ${tw`m-0 text-app-font-14 font-medium text-app-color-black mt-app-margin-4 mb-app-margin-40`}
`;
