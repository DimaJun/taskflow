import s from './Tabs.module.scss';
import type { ITab } from './TabItem/TabItem';
import { TabItem } from './TabItem/TabItem';
import { CSSProperties } from 'react';

interface Props {
	items: ITab[];
}

export function Tabs(props: Props) {
	const { items } = props;

	const styles: CSSProperties = {
		gridTemplateColumns: `repeat(${items.length}, 1fr)`,
	};

	return (
		<div
			className={s.Tabs}
			style={styles}
		>
			{items.map((tab) => (
				<TabItem
					key={`tabs-item-${tab.content}`}
					tab={tab}
				/>
			))}
		</div>
	);
}
