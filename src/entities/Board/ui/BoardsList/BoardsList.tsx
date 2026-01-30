import s from './BoardsList.module.scss';
import { BoardCard } from '../BoardCard/BoardCard';

export function BoardsList() {
	return (
		<ul className={s.list}>
			<li>
				<BoardCard />
			</li>
			<li>
				<BoardCard />
			</li>
			<li>
				<BoardCard />
			</li>
			<li>
				<BoardCard />
			</li>
			<li>
				<BoardCard />
			</li>
			<li>
				<BoardCard />
			</li>
		</ul>
	);
}
