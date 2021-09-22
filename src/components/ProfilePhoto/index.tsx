// Styled Components
import { ProfilePhotoStyled } from './styles';

// Types
type ProfilePhotoProps = {
	photoURL: string;
};

const ProfilePhoto = ({ photoURL }: ProfilePhotoProps) => {

	return (
		<ProfilePhotoStyled 
			photoURL={photoURL}
		/>
	);
};

export default ProfilePhoto;