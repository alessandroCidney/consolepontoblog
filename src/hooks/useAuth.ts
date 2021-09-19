// React
import { useState, useEffect } from 'react';

// Services
import { getAuth, onAuthStateChanged } from '../services/firebase';

export type User = {
	user_id: string;
}

const useAuth = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();

	useEffect(() => {

		onAuthStateChanged(auth, user => {
			if(user) {
				console.log(user);
			} else {
				console.log('User is signed out');
			}
		});

	}, []);

	return;
};

export {
	useAuth
};