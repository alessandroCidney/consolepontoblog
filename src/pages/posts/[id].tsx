// React
import { useEffect, useState } from 'react';

// Next.js
import { useRouter } from 'next/router';

// Services
import { database, ref, child, get } from '../../services/firebase';

// Slate
import { Node } from 'slate';

// Components
import SlateEditor from '../../components/SlateEditor';

const Post = () => {
	const [editorContent, setEditorContent] = useState<Node[]>([]);

	const router = useRouter();
	const { id } = router.query;

	useEffect(async () => {
		if(!id) return;

		const dbRef = ref(database);

		const snapshot = await get(child(dbRef, `posts/${id}`));

		if(snapshot.exists()) {
			console.log(snapshot.val());
			setEditorContent(snapshot.val().content);
		} else {
			console.log('No data');
		}

	}, [router]);

	return (
		<>
			{
				(editorContent.length!==0) &&
				<SlateEditor
					isEditable={false}
					defaultValue={editorContent}
				>
					
				</SlateEditor>
			}
		</>
	);
};

export default Post;

// -MjVw5rlrIBaIOuEcVTC