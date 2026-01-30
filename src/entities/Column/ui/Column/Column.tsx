import s from './Column.module.scss';
import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';
import { Task } from '@/entities/Task';

export function Column() {
	return (
		<div className={s.Column}>
			<div className={s.top}>
				<h2 className={s.type}>
					К выполнению
					<span className={s.count}>2</span>
				</h2>
				<Button variant='clear'>
					<Plus size={18} />
				</Button>
			</div>
			<div className={s.tasks}>
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	);
}
