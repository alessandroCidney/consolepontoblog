// React
import React, { useMemo, useState, useCallback } from 'react';

// Next.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

// Components
import Header from '../components/Header';
import SlateEditor from '../components/SlateEditor';
import DropImageZone from '../components/DropImageZone';
import PostTitleInput from '../components/PostTitleInput';

// Hooks
import { useAuth } from '../hooks/useAuth';

// Styled Components
import styled from 'styled-components';

// Slate
import { Node } from 'slate';

// Firebase
import { 
	database, 
	ref, 
	set, 
	push,
	firebaseStorage
} from '../services/firebase';

// Types
import type { NextPage } from 'next';
import { User } from '../hooks/useAuth';

const Main = styled.main`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;

	padding-top: 100px;
`;

const EditorPage: NextPage = () => {
	const [editorContent, setEditorContent] = useState<Node[]>([]);
	const [thumbnailImage, setThumbnailImage] = useState<File>();

	const router = useRouter();

	const { id }: User = useAuth();

	async function test() {
		try {
			const storage = firebaseStorage.getStorage();
			
			const reference = `images/${id}/${thumbnailImage.name}`;

			const storageRef = firebaseStorage.ref(
				storage, 
				reference
			);

			firebaseStorage.uploadBytes(storageRef, thumbnailImage).then((snapshot) => {
				console.log(`Uploaded to ${reference}`);
			});

			const downloadURL = await firebaseStorage.getDownloadURL(storageRef);

			console.log(downloadURL);

		} catch(err) {
			console.log('error', err);
		}
	}

	async function saveNewPost() {
		const baseURL = 'http://localhost:3000';

		const formData = new FormData();

		formData.append('post_content', JSON.stringify(editorContent));
		formData.append('post_thumbnail', thumbnailImage);
		formData.append('user_id', id);

		await fetch(`${baseURL}/api/posts/post/new`, {
			method: 'POST',
			body: formData
		});
	};

	return (
		<>
			<Head>
				<title>New Post</title>
			</Head>
			<Header />
		  	<Main>
		  		
			  	<button
			  		onClick={saveNewPost}
			  	>
			  		Click!
			  	</button>

		  		<DropImageZone
		  			setFile={setThumbnailImage}
		  		/>

		  		<PostTitleInput />

			  	<SlateEditor 
			  		setEditorContent={setEditorContent}
			  	/>
		    </Main>
		</>
	);
}

export default EditorPage;