import s from './Tag.module.scss';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { classNames } from '@/shared/helpers';

export interface ITag {
	content: ReactNode;
	Icon?: LucideIcon;
}

interface Props {
	className?: string;
	content: ReactNode;
	Icon?: LucideIcon;
}

export function Tag(props: Props) {
	const { className = '', content, Icon } = props;

	return (
		<span className={classNames(s.Tag, {}, [className])}>
			{Icon && <Icon size={16} />}
			{content}
		</span>
	);
}
