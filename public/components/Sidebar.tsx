import { useState, useMemo, useCallback, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import normalize from 'lib/normalize'
import useRoutines from 'hooks/useRoutines'
import Row from './SidebarRow'

import styles from 'styles/components/Sidebar.module.scss'

const Sidebar = () => {
	const [query, setQuery] = useState('')
	const routines = useRoutines()
	
	const filteredRoutines = useMemo(() => {
		const normalizedQuery = normalize(query)
		
		return routines.filter(routine =>
			normalize(routine.name).includes(normalizedQuery) ||
			normalize(routine.description).includes(normalizedQuery)
		)
	}, [routines, query])
	
	const onSearchInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}, [setQuery])
	
	return (
		<aside className={styles.root}>
			<h2 className={styles.title}>
				My routines
			</h2>
			<div className={styles.searchContainer}>
				<FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
				<input
					className={styles.searchInput}
					placeholder="Search"
					value={query}
					onChange={onSearchInputChange}
				/>
			</div>
			<ol className={styles.routines}>
				{filteredRoutines.map(routine => (
					<Row key={routine.id} routine={routine} />
				))}
			</ol>
		</aside>
	)
}

export default Sidebar
