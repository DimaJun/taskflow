import s from './ProjectCard.module.scss';
import { Button } from '@/shared/ui/Button';
import { EllipsisVertical, Grid3x3, Users, Calendar } from 'lucide-react';
import { Progress } from '@/shared/ui/Progress';
import { AvatarList } from '@/shared/ui/Avatar';
import { InfoItem } from '@/shared/ui/InfoItem';

export function ProjectCard() {
	return (
		<div className={s.Card}>
			<div className={s.topBorder} />
			<div className={s.top}>
				<h2 className={s.title}>Разработка платформы</h2>
				<p className={s.description}>Основной продуктовый проект компании</p>
				<Button
					className={s.actions}
					variant='clear'
				>
					<EllipsisVertical size={16} />
				</Button>
			</div>
			<Progress
				text='Прогресс'
				value={67}
			/>
			<div className={s.info}>
				<InfoItem
					value={3}
					Icon={Grid3x3}
					label='доски'
				/>
				<InfoItem
					value={8}
					Icon={Users}
					label='участников'
				/>
			</div>
			<div className={s.divider} />
			<div className={s.bottom}>
				<InfoItem
					value={2}
					Icon={Calendar}
					label='часа назад'
				/>
				<AvatarList />
			</div>
		</div>
	);
}
