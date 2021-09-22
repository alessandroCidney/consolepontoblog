// Styled Components
import styled from 'styled-components';

export const StyledLogo = styled.div`
	font-family: Montserrat, sans-serif;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #000;

	font-size: 1rem;
	font-weight: 900;

	height: 100%;
	width: 200px;
`;

export const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;

	height: 10vh;
	width: 100%;

	background-color: #fff;
	box-shadow: 0 1px 2px #cecece;

	display: flex;
	align-items: center;
	justify-content: space-between;

	z-index: 10;

	padding-right: 20px;

	& ~ * {
		transform: translateY(10vh);
	}
`;