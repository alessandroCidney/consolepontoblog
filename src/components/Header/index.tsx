// React
import { useState, useEffect } from 'react';

// Components
import ProfilePhoto from '../ProfilePhoto';

// Hooks
import { useAuth } from '../../hooks/useAuth';

// Styled Components
import { StyledLogo, StyledHeader } from './styles';

// Types
import { User } from '../../hooks/useAuth';

const Header = () => {

	const { avatar }: User = useAuth();

	return (
		<StyledHeader>
			<StyledLogo>CONSOLE.BLOG()</StyledLogo>
			<ProfilePhoto 
				photoURL={avatar}
			/>
		</StyledHeader>
	);
};

export default Header;