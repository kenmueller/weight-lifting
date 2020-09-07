import { GetServerSideProps } from 'next'

import Routine from 'models/Routine'
import getRoutine from 'lib/getRoutine'
import Layout from 'components/Layout'

import styles from 'styles/pages/Routine.module.scss'

export interface RoutinePageProps {
	routine: Routine
}

const RoutinePage = ({ routine }: RoutinePageProps) => {
	return (
		<Layout>
			
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
	const routine = await getRoutine(params.id as string)
	
	if (!routine)
		res.statusCode = 404
	
	return { props: { routine } }
}

export default RoutinePage
