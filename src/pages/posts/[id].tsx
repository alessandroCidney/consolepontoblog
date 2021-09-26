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

// Styled Components
import styled from 'styled-components';

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
	const [postImageURL, setPostImageURL] = useState('');
	const [editorContent, setEditorContent] = useState<Node[]>([]);
	const [postCreationDate, setPostCreationDate] = useState('');
	const [postTitle, setPostTitle] = useState('');

	console.log(data);

	useEffect(() => {
		if(!data.error) {
			setEditorContent(JSON.parse(data.post_content));
			setPostImageURL(data.download_url);
			setPostCreationDate(data.created_at);
			setPostTitle(data.post_title);
		}
	}, []);

	return (
		<>
			<Header />
			<PageTitleSection>
				<PostThumbImage 
					imageURL={postImageURL}
				/>
				<PostTitle>
					<h1>
						{ postTitle }
					</h1>

					<div>Escrito por <span>Cídney</span></div>

					<div className='date'>{ postCreationDate }</div>
				</PostTitle>
			</PageTitleSection>
			<PageBody>
				{
					(editorContent.length!==0) &&
					<SlateEditor
						isEditable={false}
						withBorder={false}
						defaultValue={editorContent}
					/>
				}
			</PageBody>
		</>
	);
};

const PostThumbImage = styled.div`
	${props => props.imageURL && `background-image: url('${props.imageURL}');`}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	width: 50%;
	height: 100%;

	border-radius: 0 8px 8px 0;
`;

const PageBody = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: flex-start;
	justify-content: center;	
`;

const PageTitleSection = styled.div`
	width: 100%;
	height: 400px;

	margin: 20px 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PostTitle = styled.div`
	width: 50%;

	padding: 40px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	flex-direction: column;

	> h1 {
		font-size: 2.5rem;
	}

	> div {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		> span {
			font-weight: 900;

			margin-left: 3px;
		}
	}

	> div.date {
		font-size: .8rem;
	}
`;

export default Post;

// -MkUYOXP62A7dkRfU06P