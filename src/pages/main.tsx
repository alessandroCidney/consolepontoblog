// React
import { useState, useEffect } from 'react';

// Next.js
import Head from 'next/head';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { InferGetStaticPropsType } from 'next';

// Components
import Header from '../components/Header';
import PostThumbnail from '../components/PostThumbnail';

// Styled Components
import {
	StyledMain,
	FlexRow,
	FlexMiniColumn,
	FlexColumn
} from '../styles/main';

// Hooks
import { useAuth } from '../hooks/useAuth';

// Types
import { PostThumbnailProps } from '../components/PostThumbnail';

type PostsArrayItem = {
	author_id: string;
	created_at: string;
	download_url: string;
	post_content: string;
	post_id: string;
	post_title: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const baseURL = 'http://localhost:3000';

	const response = await fetch(`${baseURL}/api/posts/all`);
	const data = await response.json();

	return {
		props: {			
			data
		}
	};
};

const MainPage: NextPage = (
	{ data }: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const [postsArray, setPostsArray] = useState<PostsArrayItem[]>([]);
	
	useAuth();

	useEffect(() => {

		setPostsArray(Object.entries(data).map(e => {
			e[1].post_id = e[0];

			return e[1];
		}));

	}, []);

	return (
		<>
			<Header />

			<StyledMain>

				{
					postsArray.length > 0 &&
					<FlexRow>
						<PostThumbnail
							post_id={postsArray[0].post_id}
							title={postsArray[0].post_title}
							image={postsArray[0].download_url}
							created_at={postsArray[0].created_at}
							author={postsArray[0].author_id}
							author_profile_photo={postsArray[0].author_profile_photo}
						/>

						<FlexMiniColumn>
							<PostThumbnail 
								mode={'mini'}
								post_id={postsArray[1].post_id}
								title={postsArray[1].post_title}
								image={postsArray[1].download_url}
								created_at={postsArray[1].created_at}
								author={postsArray[1].author_id}
								author_profile_photo={postsArray[1].author_profile_photo}
							/>

							<PostThumbnail 
								mode={'mini'}
								post_id={postsArray[2].post_id}
								title={postsArray[2].post_title}
								image={postsArray[2].download_url}
								created_at={postsArray[2].created_at}
								author={postsArray[2].author_id}
								author_profile_photo={postsArray[2].author_profile_photo}
							/>
						</FlexMiniColumn>
					</FlexRow>
				}

				<FlexColumn>
					{
						postsArray.slice(3, postsArray.length).map(post => (
							<PostThumbnail 
								key={`post-id-${post.post_id}`}
								post_id={post.post_id}
								mode={'large'}
								title={post.post_title}
								image={post.download_url}
								created_at={post.created_at}
								author={post.author_id}
								author_profile_photo={post.author_profile_photo}
							/>
						))
					}
				</FlexColumn>
			</StyledMain>
		</>
	);
};



export default MainPage;