import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'weight-lift.appspot.com'
})

export { default as app } from './app'
