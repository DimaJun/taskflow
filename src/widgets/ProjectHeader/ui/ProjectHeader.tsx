import s from './ProjectHeader.module.scss';
import { Avatar, AvatarList } from '@/shared/ui/Avatar';
import { Users, Settings, Plus } from 'lucide-react';
import { Button } from '@/shared/ui/Button';

export function ProjectHeader() {
	return (
		<div className={s.header}>
			<div className={s.top}>
				<Avatar
					className={s.avatar}
					size={70}
					fullName='Разработка платформы'
				/>
				<div className={s.info}>
					<h1 className={s.title}>Разработка платформы</h1>
					<p className={s.description}>Основной продуктовый проект компании</p>
					<div className={s.bottom}>
						<p className={s.participants}>
							<Users
								className={s.icon}
								size={18}
							/>{' '}
							8 участников
						</p>
						<AvatarList max={4} />
					</div>
				</div>
				<div className={s.actions}>
					<Button
						className={s.settings}
						variant='clear'
					>
						<Settings size={18} />
						Настройки
					</Button>
					<Button className={s.addBoard}>
						<Plus size={18} />
						Новая доска
					</Button>
				</div>
			</div>
			<div className={s.tabs}>
				<Button
					className={s.tab}
					variant='clear'
				>
					Активные
				</Button>
				<Button
					className={s.tab}
					variant='clear'
				>
					Архив
				</Button>
			</div>
		</div>
	);
}
