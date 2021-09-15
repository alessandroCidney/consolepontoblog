// Next Components
import Head from 'next/head';
import Link from 'next/link';

// Components
import Logo from '../components/Logo';
import Button from '../components/Button';

// Styled Components
import styled from 'styled-components';

// Types
import type { NextPage } from 'next';

const Login: NextPage = () => {

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

const Main = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	min-width: 63px;
	min-height: 325px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 39px;
`;

const InputsDivision = styled.div`
	min-width: 386px;
	min-height: 171px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 30px;
`;

const InputAndLabelDivision = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 16px;

	min-width: 386px;
`;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	min-width: 386px;

	padding-left: 14px;
`;

const StyledInput = styled.input`
	min-width: 386px;
	min-height: 41px;

	border-radius: 8px;
	border: 1px solid #000;

	padding-left: 11px;

	font-size: 14px;

	transition: .2s;

	&:focus {
		font-size: 15px;
	}
`;

export default Login;