// React
import { useRef, useState } from 'react';

// Styled Components
import { StyledTextArea } from './styles';

const PostTitleInput = () => {
	const [textAreaHeight, setTextAreaHeight] = useState(80);

	return (
		<StyledTextArea 
			placeholder="Título do post" 
			onInput={e => setTextAreaHeight(last => last > e.target.scrollHeight
													? last
													: e.target.scrollHeight
											)}
			textAreaHeight={textAreaHeight}
			maxLength={200}
		/>
	);
};

export default PostTitleInput;