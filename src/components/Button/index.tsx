// React
import { ReactNode, HTMLButtonElement } from 'react';

// Styled Components
import { StyledButton } from './styles';

type ButtonProps = HTMLButtonElement & {
	customWidth?: number;
	customHeight?: number;
	children: ReactNode;
}

const Button = ({ customWidth, customHeight, children }: ButtonProps) => {

	return (
		<StyledButton
			customWidth={customWidth}
			customHeight={customHeight}
		>
			{ children }
		</StyledButton>
	);
};

export default Button;