import s from './AvatarList.module.scss';
import { Avatar } from '@/shared/ui/Avatar';

interface User {
	id: string;
	fullName: string;
	avatar?: string;
}

interface Props {
	users: User[];
	max?: number;
	size?: number;
}

export function AvatarList(props: Props) {
	const { users, max = 3, size = 30 } = props;

	const visibleUsers = users.slice(0, max);
	const rest = users.length - max;

	return (
		<div className={s.list}>
			{visibleUsers.map(({ id, avatar, fullName }) => (
				<Avatar
					key={id}
					className={s.avatar}
					src={avatar}
					fullName={fullName}
					rounded
					size={size}
				/>
			))}
			{rest > 0 && (
				<div
					className={s.more}
					style={{ width: size, height: size }}
				>
					+{rest}
				</div>
			)}
		</div>
	);
}
