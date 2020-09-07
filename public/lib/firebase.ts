import firebase from 'firebase/app'

if (!firebase.apps.length)
	firebase.initializeApp({
		apiKey: 'AIzaSyDW1L0gFdmVDH6CMWfVsX4_vIwXvZp7o2c',
		authDomain: 'weight-lift.firebaseapp.com',
		databaseURL: 'https://weight-lift.firebaseio.com',
		projectId: 'weight-lift',
		storageBucket: 'weight-lift.appspot.com',
		messagingSenderId: '955005810594',
		appId: '1:955005810594:web:d2a3ad0c5cdf4b1ec3e4fb',
		measurementId: 'G-XR3ZLT7Z9X'
	})

export default firebase
