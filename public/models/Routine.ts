import User from './User'

export default interface Routine {
	id: string
	slug: string
	name: string
	owner: User
}
