import s from './ProjectCard.module.scss';
import { Button } from '@/shared/ui/Button';
import { EllipsisVertical, Grid3x3, Users, Calendar } from 'lucide-react';
import { Progress } from '@/shared/ui/Progress';
import { AvatarList } from '@/shared/ui/Avatar';

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
				<p className={s.boards}>
					<Grid3x3
						className={s.icon}
						size={18}
					/>
					3 доски
				</p>
				<p className={s.participants}>
					<Users
						className={s.icon}
						size={18}
					/>
					8 участников
				</p>
			</div>
			<div className={s.divider} />
			<div className={s.bottom}>
				<p className={s.activity}>
					<Calendar
						className={s.icon}
						size={18}
					/>
					2 часа назад
				</p>
				<AvatarList />
			</div>
		</div>
	);
}
