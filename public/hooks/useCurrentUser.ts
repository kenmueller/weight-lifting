import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import firebase from 'lib/firebase'

import 'firebase/auth'

const auth = firebase.auth()

const useCurrentUser = () => {
	const [user, setUser] = useState<firebase.User | null>(null)
	
	useEffect(() => (
		auth.onAuthStateChanged(
			setUser,
			error => toast.error(error.message)
		)
	), [setUser])
	
	return user
}

export default useCurrentUser
