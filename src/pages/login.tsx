// Next.js
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router'

// Components
import Logo from '../components/Logo';
import Button from '../components/Button';

// Styled Components
import {
	Main,
	Form,
	InputsDivision,
	InputAndLabelDivision,
	StyledLabel,
	StyledInput,
	Line,
	LinesFlexRow
} from '../styles/login';

// Services
import { getAuth, signInWithPopup, GoogleAuthProvider } from '../services/firebase';

// Types
import type { NextPage } from 'next';

const Login: NextPage = () => {
	async function signInWithGoogle() {
		try {
			const provider = new GoogleAuthProvider();

			const auth = getAuth();

			const result = await signInWithPopup(auth, provider);

			const credential = GoogleAuthProvider.credentialFromResult(result);

			console.log(credential);

			const user = result.user;

			console.log(user);

			alert("Autenticação realizada com sucesso!");

			Router.push('/main');
		} catch (err) {
			alert("Houve um erro durante a autenticação");

			console.log("Houve um erro durante a autenticação", err);
		}
		
	};

	return (
		<>
			<Head>
				<title>Sign In</title>
			</Head>

			<Main>
				<Form
					onSubmit={e => e.preventDefault()}
				>
					<Logo />

					<Button
						customBorderColor={"#cecece"}
						customBackgroundColor={"#fff"}
						customFontColor={"#000"}
						customHoverBackgroundColor={"#fff"}
						customIcon={["fab", "google"]}
						onClick={() => signInWithGoogle()}
					>
						ENTRAR COM O GOOGLE
					</Button>

					<LinesFlexRow>
						<Line />
							Ou entre com email e senha
						<Line />
					</LinesFlexRow>

					<InputsDivision>

						<InputAndLabelDivision>
							<StyledLabel htmlFor=''>Email</StyledLabel>
							<StyledInput 
								type='text'
								placeholder='Type your email'
							/>	
						</InputAndLabelDivision>
						
						<InputAndLabelDivision>
							<StyledLabel htmlFor="">Password</StyledLabel>
							<StyledInput 
								type='text' 
								placeholder='Type your password'
							/>	
						</InputAndLabelDivision>

					</InputsDivision>

					<Button>SIGN IN</Button>
				</Form>				
			</Main>
		</>
	);
}



export default Login;