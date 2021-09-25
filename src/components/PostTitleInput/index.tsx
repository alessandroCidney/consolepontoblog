// React
import { useRef, useState } from 'react';

// Styled Components
import { StyledTextArea } from './styles';

type PostTitleInputProps = {
	postTitle: string;
	setPostTitle: () => void;
};

const PostTitleInput = ({ postTitle, setPostTitle }: PostTitleInputProps) => {
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
			onChange={e => setPostTitle(e.target.value)}
			value={postTitle}
		/>
	);
};

export default PostTitleInput;