import {AppButtonProps} from './AppButton.types';
import {ExpandStyled} from 'types';
import {SAppButton} from './AppButton.styled';

const AppButton = ({
   children,
   buttonType,
   icon,
   ...props
}: React.PropsWithChildren<AppButtonProps>) => {
   return (
      <SAppButton
         buttonType={buttonType}
         {...(props as ExpandStyled<typeof SAppButton>)}>
         {icon}
         {children}
      </SAppButton>
   );
};

export default AppButton;
