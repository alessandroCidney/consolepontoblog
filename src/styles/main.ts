// Styled Components
import styled from 'styled-components';

export const StyledMain = styled.main`
	width: 100%;
	min-height: 100vh;

	padding-top: 30px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const FlexRow = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 42px;
	flex-direction: row;
`;

export const FlexMiniColumn = styled.div`
	width: 367px;
	height: 522px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`;

export const FlexColumn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 42px;

	margin-top: 42px;

	width: 100%;
`;