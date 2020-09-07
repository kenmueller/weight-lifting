import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import firebase from 'lib/firebase'
import Routine from 'models/Routine'
import useCurrentUser from './useCurrentUser'

import 'firebase/firestore'

const firestore = firebase.firestore()

const useRoutines = () => {
	const [routines, setRoutines] = useState<Routine[]>([])
	const user = useCurrentUser()
	
	useEffect(() => (
		user
			? firestore.collection(`users/${user.uid}/routines`).onSnapshot(
				snapshot => setRoutines(_routines => {
					const routines = [..._routines]
					
					// for (const { type, doc } of snapshot.docChanges())
					// 	switch (type) {
					// 		case 'added':
								
					// 	}
					
					return routines
				}),
				error => toast.error(error.message)
			)
			: undefined
	), [user, setRoutines])
	
	return routines
}

export default useRoutines
