import Head from 'next/head'

import styles from 'styles/index.module.scss'

const Home = () => (
	<div className={styles.root}>
		<Head>
			<title key="title">Weight Lifting</title>
		</Head>
		<h1>If you see this, your Next.js app is working!</h1>
	</div>
)

export default Home
