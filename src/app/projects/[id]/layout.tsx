import { PropsWithChildren } from 'react';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import s from './page.module.scss';
import { Metadata } from 'next';
import { Page } from '@/shared/ui/Page';

export const metadata: Metadata = {
	title: 'Projects',
};

export default function ProjectLayout({ children }: PropsWithChildren) {
	return (
		<Page className={s.project}>
			<Breadcrumbs items={[{ label: 'Проекты', href: '/projects' }, { label: 'Разработка платформы' }]} />
			{children}
		</Page>
	);
}
