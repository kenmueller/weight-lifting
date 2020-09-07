import useRoutines from 'hooks/useRoutines'

import styles from 'styles/components/Sidebar.module.scss'

const Sidebar = () => {
	const routines = useRoutines()
	
	return (
		<aside className={styles.root}>
			
		</aside>
	)
}

export default Sidebar
