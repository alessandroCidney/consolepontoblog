// Styled Components
import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	min-width: 63px;
	min-height: 325px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 39px;
`;

export const InputsDivision = styled.div`
	min-width: 386px;
	min-height: 171px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 30px;
`;

export const InputAndLabelDivision = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	gap: 16px;

	min-width: 386px;
`;

export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	min-width: 386px;

	padding-left: 14px;
`;

export const StyledInput = styled.input`
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

export const Line = styled.div`
	width: 80px;
	height: 1px;

	background-color: #a8a8b3;
`;

export const LinesFlexRow = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	gap: 5px;

	flex-direction: row;

	color: #a8a8b3;
`;