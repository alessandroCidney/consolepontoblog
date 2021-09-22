// Styled Components
import styled from 'styled-components';

export const ProfilePhotoStyled = styled.button`
	width: 40px;
	height: 40px;

	border: 0;
	border-radius: 50%;

	background: url('${props => props.photoURL && props.photoURL}') no-repeat;
	background-position: center;
	background-size: cover;

	cursor: pointer;
`;