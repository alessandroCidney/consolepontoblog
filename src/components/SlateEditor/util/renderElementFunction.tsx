// Components
import CodeElement from '../components/textComponents/CodeElement';
import DefaultElement from '../components/textComponents/DefaultElement';
import Title1Element from '../components/textComponents/Title1Element';
import Title2Element from '../components/textComponents/Title2Element';
import Title3Element from '../components/textComponents/Title3Element';

type RenderElementFunctionProps = {
	element: {
		type: string;
	}
}

const renderElementFunction = (props) => {
	switch (props.element.type) {
		case 'code':
			return <CodeElement {...props} />
			break;
		case 'title-1':
			return <Title1Element {...props} />
			break;
		case 'title-2':
			return <Title2Element {...props} />
			break;
		case 'title-3':
			return <Title3Element {...props} />
			break;
		default:
			return <DefaultElement {...props} />
	}
};

export { 
	renderElementFunction 
};