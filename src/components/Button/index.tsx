// React
import { ReactNode, HTMLButtonElement } from 'react';

// Styled Components
import { StyledButton } from './styles';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = HTMLButtonElement & {
	customWidth?: number;
	customHeight?: number;
	children: ReactNode;
}

const Button = ({ 
	customWidth, 
	customHeight, 
	customBackgroundColor, 
	customHoverBackgroundColor,
	customBorderColor,
	customFontColor,
	children 
}: ButtonProps) => {

	return (
		<StyledButton
			customWidth={customWidth}
			customHeight={customHeight}
			customBackgroundColor={customBackgroundColor}
			customBorderColor={customBorderColor}
			customFontColor={customFontColor}
			customHoverBackgroundColor={customHoverBackgroundColor}
		>
			{ children }
		</StyledButton>
	);
};

export default Button;