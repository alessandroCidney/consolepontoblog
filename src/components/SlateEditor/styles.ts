// Styled Components
import styled, { keyframes } from 'styled-components';

export const SlateWrapper = styled.div`
	max-width: 60%;
	min-width: 60%;
	min-height: 100vh;

	text-align: justify;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const SlateWrapperWithBorder = styled.div`
	${props => props.withBorder && 'border: 1px solid #cecece;'}

	max-width: 100%;
	min-width: 100%;
	min-height: 100vh;

	padding: 20px;

	text-align: justify;

	> div {
		width: 100%;
		height: 100%;
	}
`;

export const CodeElementStyled = styled.pre`
	background-color: rgb(33, 33, 33);
	
	color: #fff;

	margin-bottom: 0;
	padding: 10px;

	& + * {
		margin-top: 1em;
	}

	& + pre {
		margin: 0;
	}
`;

export const Title1ElementStyled = styled.h1`
	font-size: 24pt;
	font-weight: 800;
`;

export const Title2ElementStyled = styled.h2`
	font-size: 18pt;
	font-weight: 800;
`;

export const Title3ElementStyled = styled.h3`
	font-size: 14pt;
	font-weight: 800;
`;

export const EditorButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 25%;
	height: 100%;

	padding: 10px;

	background-color: rgb(33, 33, 33);
	color: #fff;

	border: 0;

	cursor: pointer;

	&:hover {
		filter: brightness(1.2);
	}
`;

const showButtonsWrapperAnimation = keyframes`
	from {
		opacity: 0;
	}	
	to {
		opacity: 1;
	}
`;

export const ButtonsWrapper = styled.div`
	width: 300px;
	height: 40px;

	align-self: flex-start;

	animation: ${showButtonsWrapperAnimation} .5s; 

	display: flex;
	align-items: flex-end;
	justify-content: flex-start;

	border-radius: 5px 5px 0 0;

	overflow: hidden;

	display: flex;

	${props => props.topDistance && `top: ${props.topDistance+90}px;`}
	${props => props.leftDistance && `left: ${props.leftDistance+100}px;`}

	${props => props.displayValue && `display: ${props.displayValue};`}
`;
