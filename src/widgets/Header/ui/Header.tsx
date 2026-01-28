'use client';

import s from './Header.module.scss';
import Link from 'next/link';
import { Navigation } from './Navigation/Navigation';
import { navItems } from '../consts/nav-items';
import { Input } from '@/shared/ui/Input';

export function Header() {
	return (
		<header className={s.Header}>
			<div className={s.left}>
				<Link
					className={s.logo}
					href='/'
				>
					TaskFlow
				</Link>
				<Navigation items={navItems} />
			</div>
			<div className={s.right}>
				<Input
					isSearch
					placeholder='Поиск задач...'
				/>
			</div>
		</header>
	);
}
