// React
import { useEffect, useState } from 'react';

// Next.js
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

// Components
import Header from '../../components/Header';

// Services
import { database, ref, child, get } from '../../services/firebase';

// Slate
import { Node } from 'slate';

// Components
import SlateEditor from '../../components/SlateEditor';

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context.query.id)

	const { id } = context.query;
	const baseURL = 'http://localhost:3000';

	const response = await fetch(`${baseURL}/api/posts/get/${id}`);
	const data = await response.json();

	return {
		props: {			
			data
		}
	};
}	

const Post = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [editorContent, setEditorContent] = useState<Node[]>([]);

	console.log(data);

	useEffect(() => {
		if(!data.error) setEditorContent(data.post_content);
	}, []);

	return (
		<>
			<Header />
			{
				(editorContent.length!==0) &&
				<SlateEditor
					isEditable={false}
					withBorder={false}
//					defaultValue={editorContent}
				>
					
				</SlateEditor>
			}
		</>
	);
};

export default Post;

// -Mje2hKTtFTFkeYLxdv2