// Styled Components
import { Title1ElementStyled } from '../../styles';

const Title1Element = props => {
	return (
		<Title1ElementStyled {...props.attributes}>
			{props.children}
		</Title1ElementStyled>
	);
}

export default Title1Element;