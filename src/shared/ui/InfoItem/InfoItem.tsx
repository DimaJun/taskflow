import s from './InfoItem.module.scss';
import { LucideIcon } from 'lucide-react';

interface Props {
	Icon: LucideIcon;
	iconColor?: string;
	value: number | string;
	label?: string;
}

export function InfoItem(props: Props) {
	const { value, label, Icon, iconColor } = props;

	return (
		<p className={s.item}>
			<Icon
				className={s.icon}
				color={iconColor}
				size={18}
			/>
			<span className={s.text}>
				<span className={s.value}>{value}</span>
				<span className={s.label}>{label}</span>
			</span>
		</p>
	);
}
