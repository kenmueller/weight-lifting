import {RoutineInfoPair} from "../../models/Routine";
import styles from '../../styles/components/Routine/RoutineStat.module.scss';

interface RoutineStatProps {
	routineInfoPair: RoutineInfoPair
}

export const RoutineStat = ({routineInfoPair}: RoutineStatProps) => (
	<div className={styles.routineStatContainer}>
		<span className={styles.routineStatKey}>{routineInfoPair.key}</span>
		<span className={styles.routineStatValue}>{routineInfoPair.value}</span>
	</div>
)

