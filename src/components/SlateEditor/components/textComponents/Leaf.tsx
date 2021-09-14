// Styled Components
import styled from 'styled-components';

const StyledLeaf = styled.span`
	text-align: justify;
	${props => props.originalProps.leaf.bold && 'font-weight: bold;'}
	${props => props.originalProps.leaf.italic && 'font-style: italic;'}
`;

const Leaf = props => {
	return (
		<StyledLeaf
			{...props.attributes}
			originalProps={props}
			style={ props.leaf.bold && { fontWeight: 'bold' }}
		>
			{props.children}
		</StyledLeaf>
	);
}

export default Leaf;