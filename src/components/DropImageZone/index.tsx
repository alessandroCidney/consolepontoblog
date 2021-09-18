// React
import { useRef, useState, useEffect } from 'react';

// Styled Components
import { 
	TransparentImage, 
	StyledDropImageZone, 
	InvisibleFileInput 
} from './styles';

type DropImageZoneProps = {
	setFile: () => void;
}

const DropImageZone = ({ setFile }: DropImageZoneProps) => {
	const [showImageIcon, setShowImageIcon] = useState(true);
	const [thumbURL, setThumbURL] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	function openInput() {
		inputRef.current?.click();
	};

	function showImage(file: File) {
		console.log(file)

		if(!file) return;

		const reader = new FileReader();

		reader.readAsDataURL(file as File);

		reader.onload = () => {
			setThumbURL(reader.result);
		};

		setShowImageIcon(false);
	};

	return (
		<StyledDropImageZone
			onDrop={e => {
				e.preventDefault();

				setFile(e.dataTransfer.files[0] as File);

				showImage(e.dataTransfer.files[0] as File);
			}}

			onDragOver={e => e.preventDefault()}

			onClick={openInput}

			thumbnailBackground={thumbURL !== '' ? thumbURL : undefined}
		>

			{
				showImageIcon &&
				<TransparentImage 
					src='https://cdn1.iconfinder.com/data/icons/seo-and-web-development-6/32/development_picture_illustration_design_image-256.png'
				/>
			}

			<InvisibleFileInput 
				type='file' 
				ref={inputRef} 
				onChange={e => {
					setFile(e.target.files[0] as File);

					showImage(e.target.files[0] as File);
				}} 
			/>

		</StyledDropImageZone>
	);
};

export default DropImageZone;