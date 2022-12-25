import {FC, ReactNode, useState} from 'react';
import ModalContext from './ModalContext';

interface IProps {
   children: ReactNode;
}

const ModalContextProvider: FC<IProps> = ({children}) => {
   const [isOpen, setisOpen] = useState<boolean>(false);

   const toggle = (isOpen: boolean) => {
      setisOpen(isOpen);
   };
   return (
      <ModalContext.Provider
         value={{
            isOpen,
            toggle,
         }}>
         {children}
      </ModalContext.Provider>
   );
};

ModalContextProvider.displayName = 'Modal context';
export default ModalContextProvider;
