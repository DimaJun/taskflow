import { BoardHeader } from '@/widgets/BoardHeader';
import { ColumnsList } from '@/entities/Column';

export default function BoardPage() {
	return (
		<>
			<BoardHeader />
			<ColumnsList />
		</>
	);
}
