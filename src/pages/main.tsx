// React
import { useState, useEffect } from 'react';

// Next.js
import Head from 'next/head';
import type { NextPage } from 'next';

// Components
import Header from '../components/Header';
import PostThumbnail from '../components/PostThumbnail';

// Styled Components
import styled from 'styled-components';

// Types
import { PostThumbnailProps } from '../components/PostThumbnail';

const MainPage: NextPage = () => {
	const [posts, setPosts] = useState<PostThumbnailProps[]>([]);

	useEffect(() => {

		const formatter = new Intl.DateTimeFormat('pt', {
			locale: 'pt-br',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		setPosts([
			{
				title: "Como organizar seus estudos: O Guia definitivo",
				image: "https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg",
				created_at: formatter.format(new Date()),
				author: "Fernando Costa",
				author_profile_photo: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
			},
			{
				title: "C#: Aprenda a linguagem de uma vez por todas!",
				image: "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg",
				created_at: formatter.format((new Date()).setDate((new Date()).getDate() - 3)),
				author: "Alessandro Alcântara",
				author_profile_photo: "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
			},
			{
				title: "Web scraping do zero: Domine em 1 hora",
				image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
				created_at:	formatter.format((new Date()).setDate((new Date()).getDate() - 7)),
				author: "Luiz Diamantino",
				author_profile_photo: "https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_960_720.jpg"
			}
		]);
	}, []);

	return (
		<>
			<Header />

			<StyledMain>
				{
					posts.map((post, index) => 
						<PostThumbnail 
							key={`main-post-${index}`}
							title={post.title}
							image={post.image}
							created_at={post.created_at}
							author={post.author}
							author_profile_photo={post.author_profile_photo}
						/>
					)
				}
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	width: 100%;
	min-height: 100vh;

	padding-top: 55px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 31px;
`;

export default MainPage;