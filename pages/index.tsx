import { useModalContext } from '@contexts/ModalContext/ModalContext';
import type {NextPage} from 'next';
import styled from 'styled-components';
import tw from 'twin.macro';

const Home: NextPage = () => {
	const {isOpen, toggle} = useModalContext();

	const toggleModal = () => {
		toggle(!isOpen);
	}

   return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
         
		 <TWStyledButton isRed={true} onClick={toggleModal}>toggle the modal</TWStyledButton>
          {isOpen ? 
		     (
				<StyledButton>
				<div>I am a button</div>
				<button onClick={toggleModal}>close modal</button>
				</StyledButton>
			 ) : 
			 <></>}
         

         <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
           <div>main body</div>
         </main>

         <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
      </div>
   );
};

export default Home;

interface Props {
   isRed: boolean;
}

const TWStyledButton = styled.button<Props>(({isRed}) => [
   isRed ? tw` bg-red-400` : tw`bg-blue-400`,
   tw`flex justify-center items-center w-full`,
]);

const StyledButton = styled.div`
   background-color: red;
   /* padding: 2rem; */
   ${tw`w-full bg-app-color-white flex`}
   position: absolute;
   width: 100%;
   height: 100%;
   overflow: hidden;
   background-color: red;
   left: 0;
   /* top: 0 */
`;
