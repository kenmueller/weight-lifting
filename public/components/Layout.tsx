import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

import styles from 'styles/components/Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<{}>) => (
	<div className={styles.root}>
		<Navbar />
		<Sidebar />
		<main className={styles.content}>
			{children}
		</main>
	</div>
)

export default Layout
