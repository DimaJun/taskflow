'use client';

import s from './Header.module.scss';
import Link from 'next/link';
import { Navigation } from './Navigation/Navigation';
import { navItems } from '../consts/nav-items';
import { Input } from '@/shared/ui/Input';
import { Users } from 'lucide-react';
import { Button } from '@/shared/ui/Button';

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
				<Button
					className={s.users}
					variant='clear'
				>
					<Users size={18} />
				</Button>
				<Button className={s.avatar}>ВЫ</Button>
			</div>
		</header>
	);
}
