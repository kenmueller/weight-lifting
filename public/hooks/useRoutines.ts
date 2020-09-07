import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import firebase from 'lib/firebase'
import Routine from 'models/Routine'
import User from 'models/User'
import useCurrentUser from './useCurrentUser'

import 'firebase/firestore'

const firestore = firebase.firestore()

const useRoutines = () => {
	const [routines, setRoutines] = useState<Routine[]>([])
	const user = useCurrentUser()
	
	useEffect(() => (
		user
			? firestore.collection(`users/${user.uid}/routines`).onSnapshot(
				snapshot => {
					for (const { type, doc } of snapshot.docChanges())
						switch (type) {
							case 'added': {
								let added = false
								
								firestore.doc(`routines/${doc.id}`).onSnapshot(
									snapshot => setRoutines(routines => {
										if (!snapshot.exists)
											return routines.filter(({ id }) => id !== doc.id)
										
										if (added) {
											const routine = routines.find(({ id }) => id === doc.id)
											
											if (!routine)
												return routines
											
											routine.slug = snapshot.get('slug')
											routine.name = snapshot.get('name')
											routine.info = snapshot.get('info')
											routine.description = snapshot.get('description')
											
											return [...routines]
										}
										
										added = true
										
										return [...routines, {
											id: snapshot.id,
											slug: snapshot.get('slug'),
											name: snapshot.get('name'),
											info: snapshot.get('info'),
											description: snapshot.get('description'),
											owner: {} as User
										}]
									}),
									error => toast.error(error.message)
								)
								break
							}
							case 'removed':
								setRoutines(routines =>
									routines.filter(({ id }) => id !== doc.id)
								)
								break
						}
				},
				error => toast.error(error.message)
			)
			: undefined
	), [user, setRoutines])
	
	return routines
}

export default useRoutines
