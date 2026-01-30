import s from './BoardCard.module.scss';
import { Button } from '@/shared/ui/Button';
import { EllipsisVertical, CircleCheck, Clock3, CircleAlert, Calendar } from 'lucide-react';
import { InfoItem } from '@/shared/ui/InfoItem';
import { Progress } from '@/shared/ui/Progress';

export function BoardCard() {
	return (
		<div className={s.Card}>
			<div className={s.top}>
				<div className={s.left}>
					<h2 className={s.title}>Спринт 24 - Январь</h2>
					<p className={s.description}>Основные задачи текущего спринта</p>
				</div>
				<Button variant='clear'>
					<EllipsisVertical size={18} />
				</Button>
			</div>
			<div className={s.info}>
				<InfoItem
					Icon={CircleCheck}
					value={16}
					label='выполнено'
					iconColor='#86efac'
				/>
				<InfoItem
					Icon={Clock3}
					value={6}
					label='в работе'
					iconColor='#7dd3fc'
				/>
				<InfoItem
					Icon={CircleAlert}
					value={2}
					label='осталось'
				/>
			</div>
			<Progress
				text='16 из 24 задач'
				value={67}
			/>
			<div className={s.divider} />
			<InfoItem
				Icon={Calendar}
				value={10}
				label='минут назад'
			/>
		</div>
	);
}
