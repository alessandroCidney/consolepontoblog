// Slate
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

// Styled Components
import { EditorButton, ButtonsWrapper } from '../styles';

// Util
import { CustomEditor } from '../util/customEditor';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Types
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

const Toolbar = ({ 	
	editor, 
	buttonsWrapperRef,
	buttonsWrapperTopDistance,
	buttonsWrapperLeftDistance,
	buttonsWrapperDisplay
}) => {
	
	return (
		<ButtonsWrapper
    		ref={buttonsWrapperRef}
    		topDistance={buttonsWrapperTopDistance}
    		leftDistance={buttonsWrapperLeftDistance}
    		displayValue={buttonsWrapperDisplay}
    	>
    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleBoldMark(editor);
    			}}
    		>
    			<FontAwesomeIcon icon={['fas', 'bold']} />
    		</EditorButton>

    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleItalicMark(editor);
    			}}
    		>
    			<FontAwesomeIcon icon={['fas', 'italic']} />
    		</EditorButton>
    		
    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleCodeBlock(editor);
    			}}
    		>
    			<FontAwesomeIcon icon={['fas', 'code']} />
    		</EditorButton>	

    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleTitle1(editor);
    			}}
    		>
    			H1
    		</EditorButton>

    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleTitle2(editor);
    			}}
    		>
    			H2
    		</EditorButton>

    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.toggleTitle3(editor);
    			}}
    		>
    			H3
    		</EditorButton>

    		<EditorButton
    			onMouseDown={event => {
    				event.preventDefault();
    				CustomEditor.changeToNormalType(editor);
    			}}
    		>
    			N
    		</EditorButton>
    	</ButtonsWrapper>
	);
}

export default Toolbar;