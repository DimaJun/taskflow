import s from './Page.module.scss';
import { PropsWithChildren } from 'react';
import { classNames } from '@/shared/helpers';

interface Props extends PropsWithChildren {
	className?: string;
}

export function Page({ className = '', children }: Props) {
	return <section className={classNames(s.Page, {}, [className])}>{children}</section>;
}
