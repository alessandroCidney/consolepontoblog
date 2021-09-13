// React
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';

// Components
import CodeElement from './components/textComponents/CodeElement';
import DefaultElement from './components/textComponents/DefaultElement';
import Leaf from './components/textComponents/Leaf';
import Title1Element from './components/textComponents/Title1Element';
import Title2Element from './components/textComponents/Title2Element';
import Title3Element from './components/textComponents/Title3Element';
import Toolbar from './components/Toolbar';

// Slate
import { createEditor, BaseEditor, Editor, Text, Node } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

// Styled Components
import { 
	SlateWrapper, 
	SlateWrapperWithBorder,    
	EditorButton, 
	ButtonsWrapper 
} from './styles';

// Util
import { CustomEditor } from './util/customEditor';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Types
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

type SlateEditorProps = {
	setEditorContent?: () => void | undefined;
	isEditable?: boolean;
	defaultValue?: Node[] | undefined;
}

const SlateEditor = ({ setEditorContent=undefined, isEditable=true, defaultValue=undefined }: SlateEditorProps) => {
	const slateWrapperRef = useRef(null);
	const buttonsWrapperRef = useRef(null);

	const [buttonsWrapperTopDistance, setButtonsWrapperTopDistance] = useState(0);
	const [buttonsWrapperLeftDistance, setButtonsWrapperLeftDistance] = useState(0);
	const [buttonsWrapperDisplay, setButtonsWrapperDisplay] = useState('none');

	const editor = useMemo(() => withReact(createEditor()), []);

	const [value, setValue] = useState<Node[]>(() => {
		if(typeof window !== 'undefined') {
			const contentString = localStorage.getItem('blog-with-nextjs-editor-content');

			const content = JSON.parse(contentString);

			if(content) {
				return content as Node[];
			}
		}

		return [
	    {
	      type: 'paragraph',
	      children: [{ text: 'A line of text in a paragraph.' }],
	    },
	  ] as Node[];
	});

	const renderElement = useCallback(props => {
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
	}, []);

	const renderLeaf = useCallback(props => {
		return <Leaf {...props} />
	}, []);

	useEffect(() => {
		if(setEditorContent) setEditorContent(value);

		if(defaultValue) {
			setValue(defaultValue);
		}

		if(slateWrapperRef) {
			slateWrapperRef.current?.addEventListener('dblclick', e => {
				setButtonsWrapperDisplay('flex');

				setButtonsWrapperTopDistance(e.offsetY);
				setButtonsWrapperLeftDistance(e.offsetX);
			});	

			slateWrapperRef.current?.addEventListener('contextmenu', e => {
				e.preventDefault();

				setButtonsWrapperDisplay('flex');

				setButtonsWrapperTopDistance(e.offsetY);
				setButtonsWrapperLeftDistance(e.offsetX);
			});	

			slateWrapperRef.current?.addEventListener('click', e => {
				setButtonsWrapperDisplay('none');

				console.log(e.type)
			});
		}
	}, [slateWrapperRef]);

	return (
	  	<SlateWrapper
	  		ref={slateWrapperRef}
	  	>
		    <Slate
		      editor={editor}
		      value={value}
		      onChange={newValue => {
		      	setValue(newValue);
		      	if(setEditorContent) setEditorContent(newValue);

		      	const content = JSON.stringify(newValue);

		      	if(typeof window !== undefined) {
		      		localStorage.setItem('blog-with-nextjs-editor-content', content);	
		      	}
		    	}}
		    >
		    	{
		    		isEditable&&
		    		<Toolbar 
			    		editor={editor} 
			    		buttonsWrapperRef={buttonsWrapperRef}
			    		buttonsWrapperTopDistance={buttonsWrapperTopDistance}
							buttonsWrapperLeftDistance={buttonsWrapperLeftDistance}
							buttonsWrapperDisplay={buttonsWrapperDisplay}
			    	/>
		    	}
		    	
		    	<SlateWrapperWithBorder>
		    	
		      <Editable 
		      	readOnly={!isEditable}

		      	renderElement={renderElement}
		      	renderLeaf={renderLeaf}

		      	onKeyDown={event => {

		      		if(!event.ctrlKey) {
		      			return;
		      		}

		      		switch(event.key) {
		      			case '`': {
		      				event.preventDefault();
				          CustomEditor.toggleCodeBlock(editor);
				          break;
		      			}

		      			case 'b': {
		      				event.preventDefault();
		      				CustomEditor.toggleBoldMark(editor);
		      				break;
		      			}

		      			case 'i': {
		      				event.preventDefault();
		      				CustomEditor.toggleItalicMark(editor);
		      				break;
		      			}
		      		}
		      	}}
		      />
		      </SlateWrapperWithBorder>
		    </Slate>
	    </SlateWrapper>
	);
}

export default SlateEditor;