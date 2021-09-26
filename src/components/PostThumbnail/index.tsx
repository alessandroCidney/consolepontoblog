// Next.js
import Router from 'next/router';

// Styled Components
import { StyledPost, ProfilePhoto, PostDate } from './styles';

// Types
export type PostThumbnailProps = {
	title: string;
	image: string;
	created_at: string;
	author: string;
	author_profile_photo: string;
	post_id: string;
	mode: string;
};

const PostThumbnail = ({ 
	title, 
	image, 
	created_at, 
	author, 
	author_profile_photo,
	post_id,
	mode
}: PostThumbnailProps) => {

	return (
		<>
			<StyledPost
				imageURL={image}
				mode={mode}
				onClick={() => Router.push(`/posts/${post_id}`)}
			>
				<h1>{ title }</h1>
				
				<div>por <span className='post-thumb-author'>{ author }</span></div>
				
				<ProfilePhoto 
					profilePhotoURL={author_profile_photo}
					mode={mode}
				/>

				<PostDate mode={mode}>{ created_at }</PostDate>
			</StyledPost>
		</>
	);
};

export default PostThumbnail;