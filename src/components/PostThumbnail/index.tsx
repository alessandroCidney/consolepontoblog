// Styled Components
import { StyledPost, ProfilePhoto, PostDate } from './styles';

// Types
export type PostThumbnailProps = {
	title: string;
	image: string;
	created_at: string;
	author: string;
	author_profile_photo: string;
};

const PostThumbnail = ({ 
	title, 
	image, 
	created_at, 
	author, 
	author_profile_photo 
}: PostThumbnailProps) => {

	return (
		<>
			<StyledPost
				imageURL={image}
			>
				<h1>{ title }</h1>
				
				<div>por <span class='post-thumb-author'>{ author }</span></div>
				
				<ProfilePhoto 
					profilePhotoURL={author_profile_photo}
				/>

				<PostDate>{ created_at }</PostDate>
			</StyledPost>
		</>
	);
};

export default PostThumbnail;