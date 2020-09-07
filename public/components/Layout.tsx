import { PropsWithChildren } from 'react'

import useRoutines from 'hooks/useRoutines'
import Navbar from './Navbar'

import styles from 'styles/components/Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<{}>) => {
	const routines = useRoutines()
	
	return (
		<div className={styles.root}>
			<Navbar />
			{children}
		</div>
	)
}

export default Layout
