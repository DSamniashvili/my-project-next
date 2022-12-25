import tw from 'twin.macro';
import styled from 'styled-components';

// We define styled components interfacaes inside styled components itself
interface ISPageHeaderProps {
   isBold: string;
}

// Example of how to use styled-components with props and theme variables
export const SPageHeader = styled.header<ISPageHeaderProps>`
   font-weight: ${(props) => (props.isBold === 'true' ? `bold` : 'normal')};
   color: var(--color-texts);
   margin: var(--margin-xl);
   ${tw`bg-app-color-primary`};
   text-transform: uppercase;
`;
