import Link from 'next/link'

import Routine from 'models/Routine'

export interface SidebarRowProps {
	routine: Routine
}

const SidebarRow = ({ routine }: SidebarRowProps) => (
	<li>
		<Link href="/r/[id]/[slug]" as={`/r/${routine.id}/${routine.slug}`}>
			<a>
				<p>{routine.name}</p>
			</a>
		</Link>
	</li>
)

export default SidebarRow
