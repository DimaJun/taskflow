import s from './ColumnsList.module.scss';
import { Column } from '../Column/Column';

export function ColumnsList() {
	return (
		<ul className={s.list}>
			<li>
				<Column />
			</li>
			<li>
				<Column />
			</li>
			<li>
				<Column />
			</li>
			<li>
				<Column />
			</li>
			<li>
				<Column />
			</li>
			<li>
				<Column />
			</li>
		</ul>
	);
}
