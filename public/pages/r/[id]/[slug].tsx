import { GetServerSideProps } from 'next'

import Routine from 'models/Routine'
import getRoutine from 'lib/getRoutine'
import Layout from 'components/Layout'

import styles from 'styles/pages/Routine.module.scss'
import {RoutineStat} from "../../../components/Routine/RoutineStat";
import {RoutineExerciseDay} from "../../../components/Routine/RoutineExerciseDay";

interface RoutinePageProps {
	routine: Routine
}

const RoutinePage = ({ routine }: RoutinePageProps) => {
	return (
		<Layout>
			<div className={styles.routineContainer}>
				<div className={styles.routineContainerHeader}>
					<div className={styles.routineContainerInfo}>
						<h1>{routine.name}</h1>
						<span className={styles.routineOwner}>by {routine.owner.name}</span>
					</div>
					<button className={styles.routineAddButton}>Add To My Routines</button>
				</div>
				{
					routine.info.length > 0 &&
					<div className={styles.routineStatsContainer}>
						{routine.info.map(infoPair => <RoutineStat key={infoPair.key} routineInfoPair={infoPair}/>)}
					</div>
				}
				<span className={styles.descriptionLabel}>Description</span>
				<span className={styles.routineDescription}>{routine.description}</span>
				{routine.days.map(day => <RoutineExerciseDay {...day}/>)}
			</div>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
	const routine = await getRoutine(params.id as string)

	if (!routine) {
		res.statusCode = 404
		return;
	}

	return { props: { routine } }
}

export default RoutinePage
