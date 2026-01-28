import { ReactNode } from 'react';

export interface NavItem {
	id: string;
	href: string;
	content: ReactNode;
}

export const navItems: NavItem[] = [
	{
		id: crypto.randomUUID(),
		href: '/projects',
		content: 'Проекты',
	},
	{
		id: crypto.randomUUID(),
		href: '/team',
		content: 'Команда',
	},
];
