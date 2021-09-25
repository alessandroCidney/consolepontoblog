// React
import React, { useMemo, useState, useCallback, useEffect } from 'react';

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
	const [editorTitle, setEditorTitle] = useState('');
	const [editorContent, setEditorContent] = useState<Node[]>([]);
	const [thumbnailImage, setThumbnailImage] = useState<File>();

	const router = useRouter();

	const { id }: User = useAuth();

	async function saveThumbnailInStorage(postKey: string) {
		try {
			const storage = firebaseStorage.getStorage();
			
			const reference = `images/posts/${postKey}/${thumbnailImage.name}`;

			const storageRef = firebaseStorage.ref(
				storage, 
				reference
			);

			await firebaseStorage.uploadBytes(storageRef, thumbnailImage)

			const downloadURL = await firebaseStorage.getDownloadURL(storageRef);

			return downloadURL;

		} catch(err) {
			console.log('error', err);
			return;
		};
	};

	async function saveThePostContentAndGetThePostKey() {
		const formatter = new Intl.DateTimeFormat('pt', {
			locale: 'pt-br',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		const baseURL = 'http://localhost:3000';

		const formData = new FormData();

		formData.append('post_content', JSON.stringify(editorContent));
		formData.append('post_thumbnail', thumbnailImage);
		formData.append('user_id', id);

		const results = await fetch(`${baseURL}/api/posts/post/new`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				post_title: editorTitle,
				post_content: JSON.stringify(editorContent),
				author_id: id,
				created_at: formatter.format(new Date())
			})
		})
			.then(response => response.json())
			.then(data => data);

		return results.post_key;
	};

	async function saveNewPost() {
		const postKey = await saveThePostContentAndGetThePostKey();

		const downloadURL = await saveThumbnailInStorage(postKey);

		const baseURL = 'http://localhost:3000';
		
		await fetch(`${baseURL}/api/posts/post/update`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				updates: {
					download_url: downloadURL
				},
				post_key: postKey
			})
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

		  		<PostTitleInput 
		  			postTitle={editorTitle}
		  			setPostTitle={setEditorTitle}
		  		/>

			  	<SlateEditor 
			  		setEditorContent={setEditorContent}
			  	/>
		    </Main>
		</>
	);
}

export default EditorPage;