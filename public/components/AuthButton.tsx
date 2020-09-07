import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import cx from 'classnames'

import firebase from 'lib/firebase'

import styles from 'styles/components/AuthButton.module.scss'

import 'firebase/auth'
import 'firebase/firestore'

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

const AuthButton = () => {
	const [isLoading, setIsLoading] = useState(false)
	
	const authenticate = useCallback(async () => {
		try {
			const {
				user,
				additionalUserInfo
			} = await auth.signInWithPopup(provider)
			
			if (!(user && additionalUserInfo))
				throw new Error('An unknown error occurred. Please try again')
			
			if (!user.email)
				throw new Error('Unable to get your email address')
			
			if (!additionalUserInfo.isNewUser)
				return
			
			setIsLoading(true)
			
			await firestore.doc(`users/${user.uid}`).set({
				name: user.displayName ?? 'Anonymous',
				email: user.email,
				joined: firebase.firestore.FieldValue.serverTimestamp()
			})
			
			setIsLoading(false)
		} catch ({ code, message }) {
			if (code !== 'auth/popup-closed-by-user')
				toast.error(message)
		}
	}, [setIsLoading])
	
	return (
		<button
			className={cx(styles.root, { [styles.loading]: isLoading })}
			disabled={isLoading}
			onClick={authenticate}
		>
			<FontAwesomeIcon className={styles.icon} icon={faGoogle} />
			<p className={styles.message}>
				Sign in with Google
			</p>
		</button>
	)
}

export default AuthButton
