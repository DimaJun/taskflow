import s from './BoardHeader.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { SlidersHorizontal, Users, Plus } from 'lucide-react';

export function BoardHeader() {
	return (
		<div className={s.header}>
			<Avatar
				className={s.avatar}
				fullName='Спринт 24 - Январь'
				size={40}
			/>
			<div className={s.info}>
				<h1 className={s.title}>Спринт 24 - Январь</h1>
				<p className={s.description}>Основные задачи текущего спринта</p>
			</div>
			<div className={s.left}>
				<Button
					className={s.filter}
					variant='clear'
				>
					<SlidersHorizontal size={18} /> Фильтры
				</Button>
				<Button
					className={s.participants}
					variant='clear'
				>
					<Users size={18} /> Участники
				</Button>
				<Button className={s.newTask}>
					<Plus size={18} /> Новая задача
				</Button>
			</div>
		</div>
	);
}
