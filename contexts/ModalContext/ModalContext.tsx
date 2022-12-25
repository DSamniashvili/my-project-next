import {createContext, useContext} from 'react';

interface IModalContext {
   isOpen: boolean;
   toggle: (isOpen: boolean) => void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;

export const useModalContext = () => useContext(ModalContext);
