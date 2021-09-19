// Styled Components
import styled, { keyframes } from 'styled-components';

const BackgroundAnimantion = keyframes`
	0% {
		background-position: center;
	}
	33% {
		background-position: left;
	}
	66% {
		background-position: right;
	}
	100% {
		background-position: center;
	}
`;

export const StyledPost = styled.div`
	width: 55%;
	height: 522px;

	padding: 86px 50px;

	color: #fff;

	background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3) 100%), url('${props => props.imageURL ? props.imageURL : 'none'}') no-repeat;
	background-size: cover;

	background-position: center;

	cursor: pointer;

	position: relative;

	> h1 {
		max-width: 532px;

		font-weight: 900;
		font-size: 2rem;
	}

	span.post-thumb-author {
		font-weight: 900;
	}

	${props => {
		if(props.mode === 'mini') {
			return (
				`
					width: 396px;
					height: 244px;

					padding: 42px 23px;

					font-size: 9px;

					> h1 {
						width: 254px;
						font-size: 17px;
					}
				`
			);
		}
	}}

	&:hover {
		animation: ${BackgroundAnimantion} 5s linear infinite;
	}
`;

export const ProfilePhoto = styled.div`
	width: 50px;
	height: 50px;

	background: url('${props => props.profilePhotoURL ? props.profilePhotoURL : 'none'}');
	background-size: cover;
	background-position: center;

	border-radius: 50%;

	position: absolute;

	top: 36px;
	right: 36px;

	${props => {
		if(props.mode === 'mini') {
			return (
				`	
					width: 36px;
					height: 36px;

					top: 27px;
					right: 27px;
				`			
			);
		}
	}}
`;

export const PostDate = styled.div`
	width: 200px;

	text-align: right;

	position: absolute;

	bottom: 36px;
	right: 36px;

	${props => {
		if(props.mode === 'mini') {
			return (
				`
					width: 120px;	
					bottom: 27px;
					right: 27px;
				`			
			);
		}
	}}
`;