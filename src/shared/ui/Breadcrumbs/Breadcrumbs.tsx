import s from './Breadcrumbs.module.scss';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
	label: string;
	href?: string;
}

interface Props {
	items: Crumb[];
}

export function Breadcrumbs({ items }: Props) {
	return (
		<nav
			className={s.breadcrumbs}
			aria-label='Breadcrumb'
		>
			{items.map(({ label, href }, index) => {
				const isLast = index === items.length - 1;

				return (
					<span
						key={index}
						className={s.item}
					>
						{href && !isLast ? (
							<Link
								className={s.href}
								href={href}
							>
								{label}
							</Link>
						) : (
							<span className={s.current}>{label}</span>
						)}

						{!isLast && <ChevronRight size={18} />}
					</span>
				);
			})}
		</nav>
	);
}
