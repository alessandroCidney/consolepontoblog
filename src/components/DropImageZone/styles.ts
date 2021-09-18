// Styled Components
import styled from 'styled-components';

export const TransparentImage = styled.img`
	opacity: 0.2;

	width: 70px;
`;

export const StyledDropImageZone = styled.button`
	border: 1px solid #cecece;

	background-color: transparent;

	width: 63%;
	min-height: 150px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	${props => props.thumbnailBackground 
				&& `
						background: url(${props.thumbnailBackground}) no-repeat;
						background-position: center;
						background-size: cover;
					`
	}
`;

export const InvisibleFileInput = styled.input`
	display: none;
`;