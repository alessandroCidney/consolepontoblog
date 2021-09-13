// React
import React, { useMemo, useState, useCallback } from 'react';

// Next.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Components
import Header from '../components/Header';
import SlateEditor from '../components/SlateEditor';

// Styled Components
import styled from 'styled-components';

// Slate
import { Node } from 'slate';

// Firebase
import { database, ref, set, push } from '../services/firebase';

const Main = styled.main`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	padding-top: 100px;
`;

const EditorPage: NextPage = () => {
	const [editorContent, setEditorContent] = useState<Node[]>([]);

	const router = useRouter();

	async function test() {
		try {
			const postsRef = ref(database, 'posts');

			const newPostsRef = push(postsRef);

			console.log(newPostsRef);

			await set(newPostsRef, {
				content: editorContent
			});

			router.push(`posts/${newPostsRef._path.pieces_[1]}`);

		} catch(err) {
			console.log('error', err);
		}
		
	}

	return (
		<>
			<Header />
	  	<Main>
	  		<button onClick={() => console.log(editorContent)}>
	  			Show content
	  		</button>

		  	<SlateEditor 
		  		setEditorContent={setEditorContent}
		  	/>
		  	<button
		  		onClick={test}
		  	>
		  		Click!
		  	</button>
	    </Main>
	</>
	);
}

export default EditorPage;