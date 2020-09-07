import {Day, RoutineInfoPair} from "../../models/Routine";
import styles from '../../styles/components/Routine/RoutineExcersiseDay.module.scss';
import {useState} from "react";

export const RoutineExerciseDay = ({name, exercises}: Day) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayHeader} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.collapseToggle}>{ isOpen ? "▼" : "►"}</span>
				<span className={styles.dayName}>{name}</span>
			</div>
			{ isOpen &&
				exercises.map( excersise =>
					<div className={styles.exerciseContainer}>
						<span className={styles.exerciseName}>{excersise.name}</span>
						<span className={styles.exerciseSummary}>{excersise.summary}</span>
						<p className={styles.exerciseDescription}>{excersise.description}</p>
					</div>
				)
			}
		</div>
	);
};

