import User from './User'

export interface RoutineInfoPair {
	key: string
	value: string
}

export interface Exercise {
	name: string
	description: string
	summary: string
}

export interface Day {
	name: string // Sunday
	exercises: Exercise[]
}


export default interface Routine {
	id: string
	slug: string
	name: string
	info: RoutineInfoPair[]
	description: string
	owner: User,
	days: Day[]
}
