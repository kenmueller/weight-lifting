import firebase from './firebase'
import Routine, {Day} from 'models/Routine'

import 'firebase/firestore'

const firestore = firebase.firestore()

const getRoutine = async (id: string): Promise<Routine | null> => {
	const snapshot = await firestore.doc(`routines/${id}`).get()
	const days = await firestore.collection(`routines/${id}/days`).get()
	const owner = await firestore.doc(`users/${snapshot.get('owner')}`).get()

	return snapshot.exists
		? {
			id,
			slug: snapshot.get('slug'),
			name: snapshot.get('name'),
			info: snapshot.get('info'),
			description: snapshot.get('description'),
			days: days.docs.map(doc => ({
				name: doc.id,
				exercises: doc.get("exercises")
			})),
			owner: {
				id: owner.id,
				name: owner.get('name')
			}
		}
		: null
}

export default getRoutine
