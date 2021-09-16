// Styled Components
import styled from 'styled-components';

export const StyledButton = styled.button`
	width: ${props => props.customWidth ? props.customWidth : '326'}px;
	height: ${props => props.customHeight ? props.customHeight : '40'}px;

	background-color: ${props => props.customBackgroundColor ? props.customBackgroundColor : '#000'};
	color: ${props => props.customFontColor ? props.customFontColor : '#fff'};

	border: ${props => props.customBorderColor ? `1px solid ${props.customBorderColor}` : 0};
	border-radius: 8px;

	font-weight: 800;
	font-size: 14px;

	transition: .2s;

	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 17px;

	&:hover {
		background-color: ${props => props.customHoverBackgroundColor ? props.customHoverBackgroundColor :'rgb(33, 33, 33)'};
	}
`;