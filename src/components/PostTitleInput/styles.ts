// Styled Components
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
	width: 60%;
	${props => props.textAreaHeight && `height: ${props.textAreaHeight}px;`}
	
	min-height: 80px;

	border: 1px solid #cecece;

	font-size: 24pt;
	font-weight: 900;

	padding: 20px;

	resize: none;
	overflow-y: hidden;

	margin: 20px 0;

	&:focus {
		outline: none;
	}
`;