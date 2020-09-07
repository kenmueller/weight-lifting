import Head from 'next/head'

import Routine from 'models/Routine'
import Layout from 'components/Layout'

import styles from 'styles/pages/Home.module.scss'

const Home = () => (
	<Layout>
		<Head>
			<title key="title">Weight Lifting</title>
		</Head>
	</Layout>
)

export default Home
