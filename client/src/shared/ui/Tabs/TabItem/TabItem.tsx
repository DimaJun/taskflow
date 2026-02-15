import s from './TabItem.module.scss';
import { ReactNode } from 'react';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/helpers';

export interface ITab {
	content: ReactNode;
	active: boolean;
	onClick: () => void;
}

interface Props {
	tab: ITab;
}

export function TabItem({ tab }: Props) {
	const { content, active, onClick } = tab;

	return (
		<Button
			className={classNames(s.Tab, { [s.active]: active }, [])}
			onClick={onClick}
		>
			{content}
		</Button>
	);
}
