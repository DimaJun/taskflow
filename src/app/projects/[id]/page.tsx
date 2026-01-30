import { ProjectHeader } from '@/widgets/ProjectHeader';
import { BoardsList } from '@/entities/Board';

export default function Project() {
	return (
		<>
			<ProjectHeader />
			<BoardsList />
		</>
	);
}
