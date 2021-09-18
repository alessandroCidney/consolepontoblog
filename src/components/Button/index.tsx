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
	customBackgroundColor?: string;
	customBorderColor?: string,
	customFontColor?: string;
	customIcon?: string;
};

const Button = ({ 
	customWidth, 
	customHeight, 
	customBackgroundColor, 
	customHoverBackgroundColor,
	customBorderColor,
	customFontColor,
	customIcon,
	children,
	...rest 
}: ButtonProps) => {

	return (
		<StyledButton
			customWidth={customWidth}
			customHeight={customHeight}
			customBackgroundColor={customBackgroundColor}
			customBorderColor={customBorderColor}
			customFontColor={customFontColor}
			customHoverBackgroundColor={customHoverBackgroundColor}
			{...rest}
		>
			{	
				customIcon &&
				<FontAwesomeIcon icon={customIcon} />
			}

			{ children }
		</StyledButton>
	);
};

export default Button;