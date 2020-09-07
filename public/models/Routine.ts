import User from './User'

export interface RoutineInfoPair {
	key: string
	value: string
}

export default interface Routine {
	id: string
	slug: string
	name: string
	info: RoutineInfoPair[]
	owner: User
}
