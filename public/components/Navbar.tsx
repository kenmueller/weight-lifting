import Link from 'next/link'

import ProfileDropdown from './ProfileDropdown'

import styles from 'styles/components/Navbar.module.scss'

const Navbar = () => (
	<nav className={styles.root}>
		<Link href="/">
			<a className={styles.title}>
				weight
				<span className={styles.emphasized}>lifting</span>
			</a>
		</Link>
		<ProfileDropdown />
	</nav>
)

export default Navbar
