import s from './Task.module.scss';
import { Button } from '@/shared/ui/Button';
import { EllipsisVertical, Tag as TagIcon, Calendar } from 'lucide-react';
import { Tag, TagsList } from '@/shared/ui/Tag';
import { InfoItem } from '@/shared/ui/InfoItem';
import { Avatar } from '@/shared/ui/Avatar';

const tags = [
	{
		content: 'Backend',
		Icon: TagIcon,
	},
	{
		content: 'Frontend',
		Icon: TagIcon,
	},
];

export function Task() {
	return (
		<div className={s.Task}>
			<div className={s.top}>
				<h3 className={s.title}>Разработать API для авторизации</h3>
				<Button variant='clear'>
					<EllipsisVertical size={18} />
				</Button>
			</div>
			<TagsList items={tags} />
			<div className={s.divider} />
			<div className={s.bottom}>
				<Tag
					className={s.priority}
					content='Высокий'
				/>
				<InfoItem
					Icon={Calendar}
					value={5}
					label='фев'
				/>
				<Avatar
					rounded
					fullName='ДРОП'
				/>
			</div>
		</div>
	);
}
