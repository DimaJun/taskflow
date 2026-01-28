import s from './Navigation.module.scss';
import { usePathname } from 'next/navigation';
import { NavItem } from '../../consts/nav-items';
import Link from 'next/link';
import { classNames } from '@/shared/helpers';

interface Props {
	items: NavItem[];
}

export function Navigation({ items }: Props) {
	const path = usePathname();

	return (
		<nav className={s.navigation}>
			{items.map(({ id, href, content }) => {
				const isActive = href === '/' ? path === '/' : path === href || path.startsWith(href + '/');

				return (
					<Link
						key={id}
						className={classNames(s.Link, { [s.active]: isActive }, [])}
						href={href}
					>
						{content}
					</Link>
				);
			})}
		</nav>
	);
}
