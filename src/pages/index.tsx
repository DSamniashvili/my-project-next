import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import tw from 'twin.macro';


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
		<TWStyledButton isRed={false}>I am a button</TWStyledButton>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}

export default Home;

interface Props {
	isRed: boolean;
}


const TWStyledButton = styled.button<Props>(({isRed}) => [
	isRed ? tw` bg-red-400` : tw`bg-blue-400`,
	tw`flex justify-center items-center w-full`
]);
	



const StyledButton = styled.button`
	background-color: red;
	padding: 2rem;
`;