import s from './ProjectCard.module.scss';
import { Button } from '@/shared/ui/Button';
import { EllipsisVertical } from 'lucide-react';

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
		</div>
	);
}
