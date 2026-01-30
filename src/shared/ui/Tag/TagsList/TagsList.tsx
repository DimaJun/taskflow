import s from './TagsList.module.scss';
import { Tag } from '../Tag';
import type { ITag } from '../Tag';

interface Props {
	items: ITag[];
}

export function TagsList({ items }: Props) {
	return (
		<ul className={s.list}>
			{items.map(({ Icon, content }, index) => (
				<Tag
					key={`tag-${content}-${index}`}
					Icon={Icon}
					content={content}
				/>
			))}
		</ul>
	);
}
