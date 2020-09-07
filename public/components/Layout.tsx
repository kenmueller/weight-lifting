import { PropsWithChildren } from 'react'

import useRoutines from 'hooks/useRoutines'

import styles from 'styles/components/Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<{}>) => {
	const routines = useRoutines()
	
	return (
		<div className={styles.root}>
			{children}
		</div>
	)
}

export default Layout
