// React
import { useState, useEffect } from 'react';

// Services
import { getAuth, onAuthStateChanged } from '../services/firebase';

export type User = {
	name: string;
	avatar: string;
	verified: boolean;
	id: string;
};

const useAuth = () => {
	const [user, setUser] = useState({} as User);

	const auth = getAuth();

	useEffect(() => {

		onAuthStateChanged(auth, user => {
			if(user) {
				const data: User = {
					name: user.displayName,
					avatar: user.photoURL,
					verified: user.emailVerified,
					id: user.uid
				};

				setUser(data);

			} else {
				console.log('User is signed out');
			}
		});

	}, []);

	return user;
};

export {
	useAuth
};