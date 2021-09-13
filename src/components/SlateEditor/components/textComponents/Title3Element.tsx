// Styled Components
import { Title3ElementStyled } from '../../styles';

const Title3Element = props => {
	return (
		<Title3ElementStyled {...props.attributes}>
			{props.children}
		</Title3ElementStyled>
	);
}

export default Title3Element;