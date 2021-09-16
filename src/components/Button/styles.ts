// Styled Components
import styled from 'styled-components';

export const StyledButton = styled.button`
	width: ${props => props.customWidth ? props.customWidth : '326'}px;
	height: ${props => props.customHeight ? props.customHeight : '40'}px;

	background-color: ${props => props.customBackgroundColor ? props.customBackgroundColor : '#000'};
	color: #fff;

	border: 0;
	border-radius: 8px;

	font-weight: 800;
	font-size: 14px;

	transition: .2s;

	cursor: pointer;

	&:hover {
		background-color: rgb(33, 33, 33);
	}
`;