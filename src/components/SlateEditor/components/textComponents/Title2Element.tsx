// Styled Components
import { Title2ElementStyled } from '../../styles';

const Title2Element = props => {
	return (
		<Title2ElementStyled {...props.attributes}>
			{props.children}
		</Title2ElementStyled>
	);
}

export default Title2Element;