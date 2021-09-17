// Styled Components
import { StyledPost, ProfilePhoto, PostDate } from './styles';

// Types
export type PostThumbnailProps = {
	title: string;
	image: string;
	created_at: string;
	author: string;
	author_profile_photo: string;
	mode: string;
};

const PostThumbnail = ({ 
	title, 
	image, 
	created_at, 
	author, 
	author_profile_photo,
	mode
}: PostThumbnailProps) => {

	return (
		<>
			<StyledPost
				imageURL={image}
				mode={mode}
			>
				<h1>{ title }</h1>
				
				<div>por <span class='post-thumb-author'>{ author }</span></div>
				
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